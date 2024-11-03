// ==UserScript==
// @name         ニコニコ汉化插件
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  ニコニコ汉化插件，ニコニコ中文化界面
// @match        https://*.nicovideo.jp/*
// @grant        none
// @author       TC999
// @license      GPL-3.0
// @icon         https://resource.video.nimg.jp/uni/images/favicon/32.png
// @supportURL   https://github.com/TC999/niconico-Chinese/issues
// ==/UserScript==

(function() {
    'use strict';

    // 汉化词条列表（部分词条参考 BiliBili
    const translations = { // 静态翻译
        // 顶部
        "プレミアム会員": "高级会员",
        "プレミアム": "高级会员",
        "高级会员登録": "成为高级会员",
        "マイリスト": "收藏",
        "ランキング": "排行榜",
        //"検索": "搜索",
        //"生放送": "直播",
        "チャンネル": "频道",
        "Nアニメ": "N动漫",
        "その他": "其他",
            "ブロマガ": "会员专享",
        　　"コモンズ": "公共",
            "ニュース": "新闻",
            "もっと見る": "查看更多",
        
        "お知らせ": "通知",
            "問題が発生したため通知を表示できません": "发生故障，无法显示通知",
            "しばらく時間をおいてからご利用ください": "请稍后再试",
        "会員登録して生配信や動画投稿をしよう！": " 注册成为会员并发布现场直播和视频！",
        "会員登録してコメントを投稿しよう！": "登录并发表评论",
        "ログインしていません": "未登录",
        "ログイン": "登录",
        "ログアウト": "登出",
        "アカウント設定": "账户设定",
        "サービスメニュー": "服务菜单",
        "ニコニコ動画メニュー": "ニコニコ视频菜单",
        "ニコニコ総合メニュー": "ニコニコ综合菜单",
            "フォロー中": "关注",
            "ヘルプ / サポート": "帮助 / 支持",
            "イラスト": "插图",
            "ニコニコインフォ": "ニコニコ信息",
            "ニコ生ゲーム": "ニコ在线游戏",
            "マンガ": "漫画",
            "クリエイター収入": "创作者收入",
            "クリエイターサポートツール": "创作者支持工具",
        // 中间
        "動画を検索": "视频搜索",
        "【重要／国内外からニコニコをご利用の皆様へ】ニコニコ規約／ニコニコ活動ガイドラインの一部改訂について": "【重要/致国内外使用 ニコニコ 的用户】关于 ニコニコ 规则/ニコニコ 活动指南的部分修订",

        "視聴ページで見る": "在视频播放页查看",
        "プレーヤーを更新すると播放できる場合があります": "更新播放器后可以播放",
        "プレーヤーを更新": "更新播放器",

        "詳細はこちら": "详情",

        "ニコニコについて": "关于ニコニコ",
            "サイトご利用にあたって": "使用条款",
            "サイトをご利用いただく前にお読みください": "在使用本网站前请阅读",
        // 搜索页面
        "タグで検索": "使用标签搜索",
        "を含む動画が": "包含视频",
        "件見つかりました": "条",

        // 排序列表
        "並び替え": "排序",
            "人気が高い順": "热门度高",
            "投稿日時が新しい順": "新发布",
            "再生数が多い順": "点赞多",
            "マイリスト数が多い順": "收藏多",
            "コメントが新しい順": "评论新",
            "コメントが古い順": "评论旧",

        "再生時間": "视频长度",
        "投稿日時": "发布时间",
        "ジャンル": "种类",

        "指定なし": "不限",

        "▼すべて表示": "▼展开",
        "▲隠す": "▲隐藏",

        "検索ヘルプ": "搜索帮助",

        "連続再生": "连续播放",

        "おすすめ動画": "推荐视频",
        "おすすめ": "推荐",
        "新着動画": "新视频",
        "あとで見る": "稍后再看",
        "視聴履歴": "观看历史",
        "いいね！履歴": "点赞历史",
        "ご意見・ご要望": "意见・要求",
        "限定動画": "专享视频",

        "再生": "播放",
        "コメント": "评论",
        "コメ": "评论",
        "いいね！": "点赞",
        "マイ": "收藏",

        "センシティブな内容が含まれている可能性のあるコンテンツです。": "可能包含敏感内容。",
            "設定を変更": "修改设置",

        // 无结果
            "キーワードに一致する結果が見つかりませんでした": "没有找到匹配的结果",
            "検索のヒント：": "搜索提示：",
            "キーワードに誤字・脱字がないか確認します。": "检查是否有拼写错误。",
            "別のキーワードを試してみます。": "尝试其他关键词。",
            "もっと一般的なキーワードに変えてみます。": "尝试一般的关键词。",

        "▲ページトップ": "▲回到顶部",

        "権利侵害に関する動画投稿ガイドライン": "关于版权侵权的视频投稿指南",
        "フィッシング詐欺にご注意ください": "注意钓鱼诈骗",

        // 播放页
            "フォロー": "关注",

            "フィードバック": "反馈",

            "评论リスト": "评论列表",
                "メニューを非表示": "隐藏菜单",
                "書込日時": "发表时间",

            "キーワード検索": "关键字搜索",
            "リストを反転": "反转列表",

            // 弹幕
                "サイズ": "大小",
                "カラー": "颜色",
                "コメントを入力": "输入评论",

            "全画面表示する": "全屏",
            // 设定
                "プレーヤー設定": "播放器设定",
                "スキップ秒数": "跳过秒数",
                "レジューム播放": "自动恢复",
                "リピート播放": "循环播放",
                "次の動画を自動播放": "自动播放下一个视频",
            
            "礼物を贈る": "赠送礼物",
            "この動画を通報": "举报该视频",
            "この動画のタグを通報": "举报该视频标签",

            "タグ編集": "标签编辑",

            "ギフト": "礼物",

            "エラーが発生しました": "出错了",
            "リロードすることで回復する可能性があります": "重载页面",

            "動画の詳細情報": "视频详情",
            "このユーザーの動画を非表示": "隐藏该用户视频",
            "このユーザーの動画を表示": "显示该用户视频",
            "この動画の親作品・子作品": "视频的父作品/子作品",
                "親作品": "父作品",
                    "この動画の元になった作品": "该视频的父作品",
                    "この動画から生まれた作品": "基于该视频创作的作品",
                    "自分の動画を登録する": "注册自己的视频",

        // 登录页面

        "2024年8月5日（月）以降に初めて登录する方": "2024年8月5日以后注册的用户",
            "は、": "",
            "パスワード再設定": "请重置密码",
            "をお願いします。": "。",
            "登录後、二段階認証の再設定をおすすめします。": "登录后，建议重新设置二次验证。",
            "詳しくはこちら": "详情",
        "メールアドレスまたは電話番号": "邮件地址或电话号码",
        "パスワード": "密码",
        "密码を忘れた方は": "忘记密码？",
        "再設定の手続き": "重置",

        "下記サービスアカウントでの登录はこちら": "第三方登录",
        "お手持ちのアカウントで会員登録": "第三方账号注册",
        "ニンテンドーアカウントで登录": "任天堂账号登录",

        "はじめての方は登録手続きへお進みください。": "首次使用请先注册。",
        "新規会員登録": "新用户注册",

        "利用規約及びプライバシーポリシー": "使用条款和隐私政策。",
        "に同意のうえ下記より会員登録の方法をお選びください。": "同意后选择以下注册方式。",

        "ニンテンドーアカウント": "任天堂账号",

        "または": "或",
        "メールアドレスで会員登録": "邮箱注册",
        "ご入力いただいたメールアドレスが正しい内容ではありません。": "您输入的邮箱地址不正确。",

        "次の画面に進む": "下一步",

        "指定受信設定をされている場合は、ドメイン[nicovideo.jp]を受信可能に設定してください。": "如果设置了指定接收设置，请将域名[nicovideo.jp]设置为可接收。",
        
        // 举报页面
            "違反動画の通報": "举报视频",
            "が投稿した動画を、違反動画として通報します。": "举报该视频。",

            "違反項目：": "违规原因：",
                "性的な内容が含まれている": "包含性内容",
                "暴力的な内容が含まれている": "包含暴力内容",
                "グロテスクな内容が含まれている": "包含色情内容",
                "不快な表現が含まれている": "包含令人不适的内容",
                "差別的な表現が含まれている": "包含歧视性内容",
                "残虐な内容が含まれている": "包含残虐内容",
                "法令に違反する内容が含まれている（権利侵害以外）": "包含违反法律的内容（不包括侵犯版权）",
                "保有する権利が侵害されている(権利者の方のみ)": "侵犯版权（仅限权利人）",
            "※ 権利侵害に基づく削除申請について｢保有する権利が侵害されている(権利者の方のみ)｣をお選びください。": "※ 有关删除侵权内容的申请，请选择“侵犯版权（仅限权利人）”。",
            "次へ": "下一步",
        
        // 投稿页面
            "動画を投稿するなら": "投稿视频",
            "がオススメ！": "推荐！",
            "動画を": "视频投稿",
            "たくさん！便利に！早く！": "多！方便！快捷！",
            "投稿することができます": "",
            "一般会員のまま投稿する": "普通用户投稿",
            "優先アップロード": "优先上传",
                "混雑時に待ち時間あり": "高峰期有等待时间",
                "50動画まで": "最多50个视频",
                "ユーザーLV.8以上": "用户等级8级以上",
                "ユーザーLV.18以上": "用户等级18级以上",
            "タイマー公開機能": "定时发布功能",
            "カスタムサムネイル": "自定义封面",
            "投稿後のサムネイル変更": "发布后修改封面",
            "まとめてアップロード": "批量上传",
            "動画の上書き修正機能": "视频修改功能",

            "ニコニコ高级会员サービスに関する詳細は": "关于高级会员服务的详细信息请点击",
            "こちら": "这里",
            "をご参照ください": "",
        
        // 创作者中心页 https://garage.nicovideo.jp/

            "他サービス": "其他服务",
            "シリーズ": "合集",
            "アナリティクス": "统计",
            "モデレーター管理": "管理员管理",
            "ヘルプ": "帮助",

            "1ページあたりの件数": "每页显示数量",
            "ページへ移動": "页面跳转",

            // 投稿
                "動画のアップロード": "视频上传",
                "サムネイルの設定": "封面设定",
                "動画情報を入力": "输入视频信息",

                "1本あたり": "每条",
                "まで投稿可能": "可以上传",

                "動画ファイルを選択": "选择视频文件",
                "或ドラッグ&ドロップしてください": "或拖放文件到这里",
                "※複数まとめて视频投稿選択できます": "※可以选择多个视频进行批量上传",

            // 视频页面
                "投稿動画はありません": "没有视频",

            // 合集
                "合集の新規作成": "创建合集",
                "合集とあなたの投稿视频投稿まとめることができる機能です。": "将您的视频投稿整理成合集。",
                "合集にまとまることで、視聴者が合集内の次の视频投稿探しやすくなったり、播放リストを使って连续播放しやすくなります。": "通过将视频整理成合集，观看者可以更轻松地找到合集内的下一个视频，并使用播放列表连续播放。",
                "詳しくは": "详情在",
            
            // 底部
                "ライツコントロールプログラムのご案内": "版权控制程序介绍",
                "動画投稿ガイドライン": "视频投稿指南",
        
        // 账户页面
            "フォロワー": "粉丝",
            "カバー画像を設定してユーザーページをリッチにしましょう！": "设置封面图片，让用户页面更丰富！",

            // 关注
                "ユーザー": "用户",
                "タグ": "标签",
                //"关注のユーザーがいません": "无关注用户",
            "サポート": "支持",
                "クリエイター": "创作者",
            "稍后再看・タイムシフト": "稍后再看・生放送回放",
                "タイムシフト予約リスト": "回放预约列表",
            "バッジ・図鑑": "徽章・图鉴",
                "バッジ": "徽章",
                "現在メンテナンス中です": "维护中",
            "ニコニコガレージ": "ニコニコ工房",
            // 历史
                "プレゼントシリアルコード": "赠品序列号",

            "この機能は利用できません": "此功能不可用",
        
        // 错误页面
            "403 ERROR": "403错误",
            "The request could not be satisfied.": "请求无法满足。",
            "Request blocked.": "请求被阻止。",
                "We can't connect to the server for this app or website at this time.": "我们目前无法连接到此应用或网站的服务器。",
                "There might be too much traffic or a configuration error.": "可能是流量过大或配置错误。",
                "Try again later, or contact the app or website owner.": "请稍后重试，或联系应用或网站所有者。",
            "If you provide content to customers through CloudFront, you can find steps to troubleshoot and help prevent this error by reviewing the CloudFront documentation.": "如果您通过 CloudFront 向客户提供内容，则可以通过查看 CloudFront 文档找到排除故障并帮助防止此错误的步骤。",
        // 添加更多需要替换的词条
    };

    const regexTranslations = [ // 正则翻译，暂时不起作用
        { pattern: /(\w+)で登录/g, replacement: "用$1登录" },  // 例如将“Appleでログイン”替换为“用Apple登录”
        [/([^ ]+) を含むタグ一覧/, "包含$1的标签"],
    ];

    // 获取页面中的文本节点并替换对应词条
    function translateTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            for (let key in translations) {
                if (text.includes(key)) {
                    text = text.replace(new RegExp(key, 'g'), translations[key]);
                }
            }
            node.nodeValue = text;
        } else {
            // 遍历子节点
            node.childNodes.forEach(translateTextNodes);
        }
    }

    // 处理页面加载完成后的内容
    function translatePage() {
        translateTextNodes(document.body);
    }

    // 初始翻译
    translatePage();

    // 监听DOM变化，动态替换新加载内容
    const observer = new MutationObserver(() => {
        translatePage();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
