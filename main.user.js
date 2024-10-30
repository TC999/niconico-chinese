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

    // 汉化词条列表
    const translations = { // 静态翻译
        // 顶部
        "プレミアム会員": "高级会员",
        "マイリスト": "我的列表",
        "ランキング": "排行榜",
        //"検索": "搜索",
        "チャンネル": "频道",
        "その他": "其他",
            "ブロマガ": "会员专享",
        　　"コモンズ": "公共",
            "ニュース": "新闻",
            "もっと見る": "查看更多",
        "会員登録して生配信や動画投稿をしよう！": " 注册成为会员并发布现场直播和视频！",
        "会員登録してコメントを投稿しよう！": "登录并发表评论",
        "ログインしていません": "未登录",
        "ログイン": "登录",
        "ニコニコ総合メニュー": "ニコニコ综合菜单",
            "フォロー中": "关注",
            "ヘルプ / サポート": "帮助 / 支持",
        // 中间
        "動画を検索": "视频搜索",
        "【重要／国内外からニコニコをご利用の皆様へ】ニコニコ規約／ニコニコ活動ガイドラインの一部改訂について": "【重要/致国内外使用 ニコニコ 的用户】关于 ニコニコ 规则/ニコニコ 活动指南的部分修订",
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

        "連続再生": "连续播放",

        "おすすめ動画": "推荐视频",
        "新着動画": "新视频",
        "あとで見る": "稍后再看",
        "視聴履歴": "观看历史",
        "いいね！履歴": "点赞历史",
        "ご意見・ご要望": "意见・要求",

        "再生": "播放",
        "コメ": "评论",
        "いいね！": "点赞",
        "マイ": "收藏",

        "センシティブな内容が含まれている可能性のあるコンテンツです。": "可能包含敏感内容。",
            "設定を変更": "修改设置",

        "▲ページトップ": "▲回到顶部",

        // 登录页面

        "2024年8月5日（月）以降に初めて登录する方": "2024年8月5日以后注册的用户",
        "メールアドレスまたは電話番号": "邮件地址或电话号码",

        "下記サービスアカウントでの登录はこちら": "第三方登录",
        "ニンテンドーアカウントで登录": "任天堂账号登录",
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