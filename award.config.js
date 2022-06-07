const { Intents } = require("discord.js");

module.exports = {
    team: require("./award.team.js"),
    client: {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    },
    website: {
        protocol: "https",
        domain: "giveaways-bot.com",
        callback: "/api/auth/callback",
        betaCallback: "/api/auth/callback",
        invite: "/dashboard/callback"
    },
    auth: {
        discord: {
            id: "882669141713100800",
            secret: "SK7XZH7e7bP_2AHK-P1pCqu0uES9Giji",
            callback: "https://giveaways-api.herokuapp.com/v1/auth/callback",
            scopes: [ "identify", "guilds" ],
            prompt: "none",
            botInvite: "https://discord.com/oauth2/authorize?client_id=882669141713100800&scope=bot%20applications.commands&response_type=code&permissions=8",
            invite: "https://discord.gg/jTd6GpGuFk"
        },
      youtube: {
            id: "634560038022-ms6u5936jn52vl4jjsu6p1sh4l15g7bk.apps.googleusercontent.com",
            secret: "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",
            callback: "https://giveaways-api.herokuapp.com/v1/connections/youtube/callback",
            scopes: [ "https://www.googleapis.com/auth/youtube.readonly" ],
            apiKey: "AIzaSyCg-SsCCLdc8myIkivK1yEKcVlc-1uO12g"
        },
        github: {
            id: "3405d2e8562b36968e80",
            secret: "331c421e371108101733aeed343607d15aa128dd",
            callback: "https://giveaways-api.herokuapp.com/v1/connections/github/callback",
            scopes: [ "read:user" ]
        },
        twitter: {
            id: "eURqdEVJYTEzSjRNNFJaR3o1czM6MTpjaQ",
            secret: "20w4t2wyLyR_wu1FfNyliLDSzf4T3MCwcx0NCKpLAHhLDO0YgU",
            callback: "https://giveaways-api.herokuapp.com/v1/connections/twitter/callback",
            scopes: [ "account.follows.read" ],
            apiKey: "arBiuvZpp1Xui8S31N65cD5kXSsHHQ57ZQ1xaM6BN9N2A"
        },
        twitch: {
            id: "h8tapdnhmo1sy0fdx8riweqks1ltws",
            secret: "p55pnl649mkin0cbx2aqknbftgj4ov",
            callback: "https://giveaways-api.herokuapp.com/v1/connections/twitch/callback",
            scopes: [ "user:read:follows", "channel:read:subscriptions" ]
        },
        tiktok: {
            key: "",
            secret: "",
            callback: "https://giveaways-api.herokuapp.com/v1/connections/tiktok/callback",
            scopes: [ "user.info.basic"  ]
        },
        telegram: {
          id: "",
          secret: "",
          callback: "https://giveaways-api.herokuapp.com/v1/connections/telegram/callback"
        }
    },
    requireds: {
        youtube: {
            emoji: "<:youtube:983374452685414410>",
            img: "https://cdn.discordapp.com/emojis/917471331895873626.png?size=96",
            url: "https://www.youtube.com/channel/{ID_HERE}?sub_confirmation=true",
            border: "border-red-600/20",
            bg: "bg-red-500/20",
            types: [
                {
                    name: "subscribe",
                    requiredInput: false
                }
            ]
        },
        github: {
            emoji: "<:github:983374449392881684>",
            img: "https://cdn.discordapp.com/emojis/911995938833305600.png?size=96",
            url: "https://github.com/{USER_HERE}",
            border: "border-black/20",
            bg: "bg-black/20",
            types: [
                {
                    name: "follow",
                    requiredInput: false
                }
            ]
        },
        twitch: {
            emoji: "<:twitch:983374450999312405>",
            img: "https://cdn.discordapp.com/emojis/919278360453083156.png?size=96",
            url: "https://twitch.tv/{USER_HERE}",
            border: "border-violet-600/20",
            bg: "bg-violet-500/20",
            types: [
                {
                    name: "follow",
                    requiredInput: false
                }
            ]
        },
        discord: {
            emoji: "<:discord:983374454228934656>",
            img: "https://cdn.discordapp.com/emojis/919555859820994560.png?size=96",
            url: "https://discord.gg/{INVITE_HERE}",
            border: "border-white/20",
            bg: "bg-white/20",
            types: [
                {
                    name: "join_server",
                    requiredInput: false
                },
                {
                    name: "check_role",
                    requiredInput: false
                },
                {
                    name: "invite_checker",
                    requiredInput: false
                }
            ]
        }
    },
    authPath: "/v1/auth",
    connectionsPath: "/v1/connections",
    giveawayPerm: "MANAGE_GUILD",
    giveawayLimit: [ 5, 10, 15, 20 ],
    rerollLimit: [ 2, 10, 30, 50 ],
    defaultLang: "en",
    intervalMs: 10000,
    boostIntervalMs: 30000,
    levelNames: [ "Town", "Kingdom", "Empire" ],
    boostLevels: [ 2, 7, 14 ],
    gatewayIntents: [ "BOOST", "UNBOOST", "GIVEAWAY_FINISH", "GIVEAWAY_REROLL", "GIVEAWAY_JOIN", "GIVEAWAY_CREATE", "GIVEAWAY_DELETE" ],
    promoLength: 15,
    emojis: [ '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🐚', '🌾', '💐', '🐠', '🐟', '🐬', '🐳', '🌷', '🌹', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌟', '✨', '⚡', '💥', '🌈', '🍩', '🍪', '🏆', '🐧', '🐦', '🐤' ],
    sessionKey: "vhRYmP1A$zKdlge$#c8@@jLc!Gi5VO$yvl^nJCv2ZQba!%C",
    mongoURL: process.env.mongo,
    token: process.env.token,
    cmdDir: "./src/commands",
    benefits: _lvl => ([
        {
            category: "feature",
            slug: "giveaway_limit_t1",
            title: "10 Active Giveaways",
            icon: "far fa-gift",
            infoText: "You can start 10 giveaways at once!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_limit_t2",
            title: "15 Active Giveaways",
            icon: "far fa-gift-card",
            infoText: "You can start 15 giveaways at once!",
            level: 2,
            unlocked: _lvl >= 2 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_limit_t3",
            title: "20 Active Giveaways",
            icon: "far fa-gifts",
            infoText: "You can start 20 giveaways at once!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t1",
            title: "10 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 10 times!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t2",
            title: "30 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 30 times!",
            level: 2,
            unlocked: _lvl >= 2 ? true : false,
        },
        {
            category: "feature",
            slug: "reroll_limit_t3",
            title: "50 Rerolls",
            icon: "far fa-sync-alt",
            infoText: "You can redetermine the winner 50 times!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },
        {
            category: "feature",
            slug: "giveaway_passwords",
            title: "Giveaway Passwords",
            icon: "far fa-key",
            infoText: "You can participate in the giveaways with a password!",
            level: 1,
            unlocked: _lvl >= 1 ? true : false,
        },
        {
            category: "feature",
            slug: "embed_editor",
            title: "Embed Editor",
            icon: "far fa-pencil-paintbrush",
            infoText: "You can edit the appearance of the giveaway embed!",
            level: 3,
            unlocked: _lvl >= 3 ? true : false,
        },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 1, unlocked: _lvl >= 1 ? true : false },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 2, unlocked: _lvl >= 2 ? true : false },

        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
        { category: "feature", slug: "blank", title: "", icon: "", infoText: "Soon!", level: 3, unlocked: _lvl >= 3 ? true : false },
    ])
};
