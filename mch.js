﻿const Attack = 0;
const Difence = 1;

const Front = 0;
const Middle = 1;
const Back = 2;

const Legendary = 5000;
const Epic = 4000;
const Rare = 3000;
const Uncommon = 2000;
const Novice = 1000;

const ArtEditSkill = 100000;

const SideToNum = {
    Attack: 0, Defence:1
}

const OrderToNum = {
    Front: 0, Middle: 1, Back: 2
}
const AttrToNum = {
    HP: 0, PHY: 1, INT: 2, AGI: 3
}

const SideStr = [
    "Attack","Defence"
];

const OrderStr = [
    "Front","Middle", "Back"
];

const AttrStr = [
    "HP", "PHY", "INT", "AGI"
];

const RarityToNum = {
    Legendary:5000, Epic:4000, Rare:3000, Uncommon:2000, Novice:1000, Common:1000,
};


const AttrAllZero = {
    HP:0, PHY:0, INT:0, AGI:0
};

const HeroAttr = {
    5001: { HP:459, PHY:185, INT:96, AGI:118 },
    5002: { HP:384, PHY:105, INT:181, AGI:138 },
};


const ExtensionAttr = {
    1001: { HP:60,PHY:59,INT:0,AGI:0 },
    2001: { HP:72,PHY:73,INT:0,AGI:0 },
    3001: { HP:87,PHY:86,INT:0,AGI:0 },
    4001: { HP:96,PHY:97,INT:0,AGI:0 },
    5001: { HP:114,PHY:113,INT:0,AGI:0 },
    10001: { HP:15,PHY:15,INT:0,AGI:0 },
    20001: { HP:24,PHY:21,INT:0,AGI:0 },
    30001: { HP:27,PHY:28,INT:0,AGI:0 },
    40001: { HP:33,PHY:34,INT:0,AGI:0 },
    50001: { HP:36,PHY:38,INT:0,AGI:0 },
    60001: { HP:45,PHY:46,INT:0,AGI:0 },
    70001: { HP:72,PHY:75,INT:0,AGI:0 },
    1002: { HP:0,PHY:0,INT:59,AGI:20 },
    2002: { HP:0,PHY:0,INT:73,AGI:24 },
    3002: { HP:0,PHY:0,INT:86,AGI:29 },
    4002: { HP:0,PHY:0,INT:97,AGI:32 },
    5002: { HP:0,PHY:0,INT:113,AGI:38 },
    10002: { HP:0,PHY:0,INT:15,AGI:5 },
    20002: { HP:0,PHY:0,INT:21,AGI:6 },
    30002: { HP:0,PHY:0,INT:28,AGI:9 },
    40002: { HP:0,PHY:0,INT:34,AGI:11 },
    50002: { HP:0,PHY:0,INT:38,AGI:12 },
    60002: { HP:0,PHY:0,INT:46,AGI:15 },
    70002: { HP:0,PHY:0,INT:75,AGI:24 },
    1003: { HP:0,PHY:0,INT:40,AGI:39 },
    2003: { HP:0,PHY:0,INT:49,AGI:48 },
    3003: { HP:0,PHY:0,INT:58,AGI:57 },
    4003: { HP:0,PHY:0,INT:67,AGI:66 },
    5003: { HP:0,PHY:0,INT:76,AGI:75 },
    10003: { HP:0,PHY:0,INT:10,AGI:10 },
    20003: { HP:0,PHY:0,INT:15,AGI:14 },
    30003: { HP:0,PHY:0,INT:19,AGI:18 },
    40003: { HP:0,PHY:0,INT:23,AGI:22 },
    50003: { HP:0,PHY:0,INT:27,AGI:26 },
    60003: { HP:0,PHY:0,INT:31,AGI:30 },
    70003: { HP:0,PHY:0,INT:50,AGI:49 },
    1004: { HP:177,PHY:20,INT:0,AGI:0 },
    2004: { HP:219,PHY:24,INT:0,AGI:0 },
    3004: { HP:258,PHY:29,INT:0,AGI:0 },
    4004: { HP:291,PHY:32,INT:0,AGI:0 },
    5004: { HP:339,PHY:38,INT:0,AGI:0 },
    10004: { HP:45,PHY:5,INT:0,AGI:0 },
    20004: { HP:63,PHY:6,INT:0,AGI:0 },
    30004: { HP:84,PHY:9,INT:0,AGI:0 },
    40004: { HP:102,PHY:11,INT:0,AGI:0 },
    50004: { HP:114,PHY:12,INT:0,AGI:0 },
    60004: { HP:138,PHY:15,INT:0,AGI:0 },
    70004: { HP:225,PHY:24,INT:0,AGI:0 },
    1005: { HP:135,PHY:0,INT:0,AGI:44 },
    2005: { HP:168,PHY:0,INT:0,AGI:55 },
    3005: { HP:201,PHY:0,INT:0,AGI:66 },
    4005: { HP:225,PHY:0,INT:0,AGI:74 },
    5005: { HP:267,PHY:0,INT:0,AGI:88 },
    10005: { HP:0,PHY:0,INT:0,AGI:0 },
    20005: { HP:0,PHY:0,INT:0,AGI:0 },
    30005: { HP:0,PHY:0,INT:0,AGI:0 },
    40005: { HP:0,PHY:0,INT:0,AGI:0 },
    50005: { HP:114,PHY:0,INT:0,AGI:36 },
    60005: { HP:138,PHY:0,INT:0,AGI:45 },
    70005: { HP:225,PHY:0,INT:0,AGI:72 },
    1006: { HP:0,PHY:59,INT:0,AGI:20 },
    2006: { HP:0,PHY:73,INT:0,AGI:24 },
    3006: { HP:0,PHY:86,INT:0,AGI:29 },
    4006: { HP:0,PHY:100,INT:0,AGI:33 },
    5006: { HP:0,PHY:113,INT:0,AGI:38 },
    10006: { HP:0,PHY:18,INT:0,AGI:1 },
    20006: { HP:0,PHY:27,INT:0,AGI:3 },
    30006: { HP:0,PHY:36,INT:0,AGI:12 },
    40006: { HP:0,PHY:45,INT:0,AGI:15 },
    50006: { HP:0,PHY:51,INT:0,AGI:17 },
    60006: { HP:0,PHY:63,INT:0,AGI:21 },
    70006: { HP:0,PHY:78,INT:0,AGI:26 },
    1007: { HP:75,PHY:24,INT:24,AGI:24 },
    2007: { HP:0,PHY:0,INT:58,AGI:57 },
    3007: { HP:195,PHY:64,INT:0,AGI:0 },
    4007: { HP:0,PHY:0,INT:0,AGI:0 },
    5007: { HP:0,PHY:0,INT:0,AGI:0 },
    10007: { HP:0,PHY:0,INT:0,AGI:0 },
    20007: { HP:0,PHY:0,INT:0,AGI:0 },
    30007: { HP:0,PHY:0,INT:0,AGI:0 },
    40007: { HP:0,PHY:0,INT:0,AGI:0 },
    50007: { HP:0,PHY:0,INT:0,AGI:0 },
    60007: { HP:0,PHY:0,INT:0,AGI:0 },
    70007: { HP:0,PHY:0,INT:0,AGI:0 },
    1008: { HP:60,PHY:0,INT:59,AGI:0 },
    2008: { HP:72,PHY:0,INT:73,AGI:0 },
    3008: { HP:87,PHY:0,INT:86,AGI:0 },
    4008: { HP:99,PHY:0,INT:100,AGI:0 },
    5008: { HP:114,PHY:0,INT:113,AGI:0 },
    10008: { HP:18,PHY:0,INT:18,AGI:0 },
    20008: { HP:27,PHY:0,INT:27,AGI:0 },
    30008: { HP:36,PHY:0,INT:36,AGI:0 },
    40008: { HP:45,PHY:0,INT:45,AGI:0 },
    50008: { HP:51,PHY:0,INT:51,AGI:0 },
    60008: { HP:63,PHY:0,INT:63,AGI:0 },
    70008: { HP:78,PHY:0,INT:78,AGI:0 },
    1009: { HP:60,PHY:0,INT:39,AGI:20 },
    2009: { HP:72,PHY:0,INT:49,AGI:24 },
    3009: { HP:87,PHY:0,INT:57,AGI:29 },
    4009: { HP:99,PHY:0,INT:67,AGI:33 },
    5009: { HP:114,PHY:0,INT:75,AGI:38 },
    10009: { HP:18,PHY:0,INT:16,AGI:8 },
    20009: { HP:27,PHY:0,INT:20,AGI:10 },
    30009: { HP:36,PHY:0,INT:24,AGI:12 },
    40009: { HP:45,PHY:0,INT:30,AGI:15 },
    50009: { HP:51,PHY:0,INT:34,AGI:17 },
    60009: { HP:63,PHY:0,INT:42,AGI:21 },
    70009: { HP:78,PHY:0,INT:52,AGI:26 },
    1010: { HP:117,PHY:20,INT:0,AGI:20 },
    2010: { HP:146,PHY:24,INT:0,AGI:24 },
    3010: { HP:171,PHY:29,INT:0,AGI:29 },
    4010: { HP:201,PHY:33,INT:0,AGI:33 },
    5010: { HP:225,PHY:38,INT:0,AGI:38 },
    10010: { HP:36,PHY:6,INT:0,AGI:6 },
    20010: { HP:54,PHY:9,INT:0,AGI:9 },
    30010: { HP:72,PHY:12,INT:0,AGI:12 },
    40010: { HP:90,PHY:15,INT:0,AGI:15 },
    50010: { HP:102,PHY:17,INT:0,AGI:17 },
    60010: { HP:126,PHY:21,INT:0,AGI:21 },
    70010: { HP:156,PHY:26,INT:0,AGI:26 },
    1011: { HP:39,PHY:64,INT:0,AGI:0 },
    2011: { HP:51,PHY:82,INT:0,AGI:0 },
    3011: { HP:57,PHY:96,INT:0,AGI:0 },
    4011: { HP:66,PHY:109,INT:0,AGI:0 },
    5011: { HP:78,PHY:127,INT:0,AGI:0 },
    10011: { HP:0,PHY:0,INT:0,AGI:0 },
    20011: { HP:0,PHY:0,INT:0,AGI:0 },
    30011: { HP:0,PHY:0,INT:0,AGI:0 },
    40011: { HP:30,PHY:50,INT:0,AGI:0 },
    50011: { HP:33,PHY:55,INT:0,AGI:0 },
    60011: { HP:42,PHY:70,INT:0,AGI:0 },
    70011: { HP:51,PHY:85,INT:0,AGI:0 },
    1012: { HP:0,PHY:52,INT:27,AGI:0 },
    2012: { HP:0,PHY:0,INT:56,AGI:41 },
    3012: { HP:117,PHY:76,INT:0,AGI:0 },
    4012: { HP:0,PHY:33,INT:67,AGI:33 },
    5012: { HP:117,PHY:38,INT:38,AGI:38 },
    10012: { HP:0,PHY:0,INT:0,AGI:0 },
    20012: { HP:0,PHY:0,INT:0,AGI:0 },
    30012: { HP:0,PHY:0,INT:0,AGI:0 },
    40012: { HP:0,PHY:0,INT:0,AGI:0 },
    50012: { HP:0,PHY:0,INT:0,AGI:0 },
    60012: { HP:0,PHY:0,INT:0,AGI:0 },
    70012: { HP:0,PHY:0,INT:0,AGI:0 },
    1013: { HP:0,PHY:40,INT:0,AGI:39 },
    2013: { HP:0,PHY:49,INT:0,AGI:48 },
    3013: { HP:0,PHY:58,INT:0,AGI:57 },
    4013: { HP:0,PHY:67,INT:0,AGI:66 },
    5013: { HP:0,PHY:76,INT:0,AGI:75 },
    10013: { HP:0,PHY:17,INT:0,AGI:17 },
    20013: { HP:0,PHY:20,INT:0,AGI:20 },
    30013: { HP:0,PHY:24,INT:0,AGI:24 },
    40013: { HP:0,PHY:30,INT:0,AGI:30 },
    50013: { HP:0,PHY:34,INT:0,AGI:34 },
    60013: { HP:0,PHY:42,INT:0,AGI:42 },
    70013: { HP:0,PHY:52,INT:0,AGI:52 },
    1014: { HP:60,PHY:39,INT:0,AGI:20 },
    2014: { HP:72,PHY:49,INT:0,AGI:24 },
    3014: { HP:87,PHY:57,INT:0,AGI:29 },
    4014: { HP:99,PHY:64,INT:0,AGI:33 },
    5014: { HP:114,PHY:76,INT:0,AGI:38 },
    10014: { HP:24,PHY:16,INT:0,AGI:8 },
    20014: { HP:30,PHY:20,INT:0,AGI:10 },
    30014: { HP:36,PHY:24,INT:0,AGI:12 },
    40014: { HP:45,PHY:30,INT:0,AGI:15 },
    50014: { HP:51,PHY:34,INT:0,AGI:17 },
    60014: { HP:0,PHY:0,INT:0,AGI:0 },
    70014: { HP:0,PHY:0,INT:0,AGI:0 },
    1015: { HP:60,PHY:59,INT:0,AGI:0 },
    2015: { HP:72,PHY:73,INT:0,AGI:0 },
    3015: { HP:87,PHY:86,INT:0,AGI:0 },
    4015: { HP:99,PHY:100,INT:0,AGI:0 },
    5015: { HP:114,PHY:113,INT:0,AGI:0 },
    10015: { HP:24,PHY:24,INT:0,AGI:0 },
    20015: { HP:30,PHY:30,INT:0,AGI:0 },
    30015: { HP:36,PHY:36,INT:0,AGI:0 },
    40015: { HP:45,PHY:45,INT:0,AGI:0 },
    50015: { HP:51,PHY:51,INT:0,AGI:0 },
    60015: { HP:63,PHY:63,INT:0,AGI:0 },
    70015: { HP:78,PHY:78,INT:0,AGI:0 },
    1016: { HP:0,PHY:0,INT:59,AGI:20 },
    2016: { HP:0,PHY:0,INT:73,AGI:24 },
    3016: { HP:0,PHY:0,INT:86,AGI:29 },
    4016: { HP:0,PHY:0,INT:100,AGI:33 },
    5016: { HP:0,PHY:0,INT:113,AGI:38 },
    10016: { HP:0,PHY:0,INT:24,AGI:8 },
    20016: { HP:0,PHY:0,INT:30,AGI:10 },
    30016: { HP:0,PHY:0,INT:36,AGI:12 },
    40016: { HP:0,PHY:0,INT:45,AGI:15 },
    50016: { HP:0,PHY:0,INT:51,AGI:17 },
    60016: { HP:0,PHY:0,INT:63,AGI:21 },
    70016: { HP:0,PHY:0,INT:78,AGI:26 },
    1017: { HP:60,PHY:0,INT:20,AGI:39 },
    2017: { HP:72,PHY:0,INT:24,AGI:49 },
    3017: { HP:87,PHY:0,INT:29,AGI:57 },
    4017: { HP:99,PHY:0,INT:33,AGI:67 },
    5017: { HP:114,PHY:0,INT:38,AGI:75 },
    10017: { HP:24,PHY:0,INT:8,AGI:16 },
    20017: { HP:30,PHY:0,INT:10,AGI:20 },
    30017: { HP:36,PHY:0,INT:12,AGI:24 },
    40017: { HP:45,PHY:0,INT:15,AGI:30 },
    50017: { HP:51,PHY:0,INT:17,AGI:34 },
    60017: { HP:63,PHY:0,INT:21,AGI:42 },
    70017: { HP:78,PHY:0,INT:26,AGI:52 },
    1018: { HP:117,PHY:20,INT:20,AGI:0 },
    2018: { HP:147,PHY:24,INT:24,AGI:0 },
    3018: { HP:171,PHY:29,INT:29,AGI:0 },
    4018: { HP:201,PHY:33,INT:33,AGI:0 },
    5018: { HP:225,PHY:38,INT:38,AGI:0 },
    10018: { HP:48,PHY:8,INT:8,AGI:0 },
    20018: { HP:60,PHY:10,INT:10,AGI:0 },
    30018: { HP:72,PHY:12,INT:12,AGI:0 },
    40018: { HP:90,PHY:15,INT:15,AGI:0 },
    50018: { HP:102,PHY:17,INT:17,AGI:0 },
    60018: { HP:126,PHY:21,INT:21,AGI:0 },
    70018: { HP:156,PHY:26,INT:26,AGI:0 },
    1019: { HP:117,PHY:20,INT:20,AGI:0 },
    2019: { HP:147,PHY:24,INT:24,AGI:0 },
    3019: { HP:171,PHY:29,INT:29,AGI:0 },
    4019: { HP:201,PHY:33,INT:33,AGI:0 },
    5019: { HP:225,PHY:38,INT:38,AGI:0 },
    10019: { HP:0,PHY:0,INT:0,AGI:0 },
    20019: { HP:60,PHY:10,INT:10,AGI:0 },
    30019: { HP:72,PHY:12,INT:12,AGI:0 },
    40019: { HP:90,PHY:15,INT:15,AGI:0 },
    50019: { HP:102,PHY:17,INT:17,AGI:0 },
    60019: { HP:126,PHY:21,INT:21,AGI:0 },
    70019: { HP:156,PHY:26,INT:26,AGI:0 },
    1020: { HP:0,PHY:20,INT:0,AGI:59 },
    2020: { HP:0,PHY:24,INT:0,AGI:73 },
    3020: { HP:0,PHY:29,INT:0,AGI:86 },
    4020: { HP:0,PHY:33,INT:0,AGI:100 },
    5020: { HP:0,PHY:38,INT:0,AGI:113 },
    10020: { HP:0,PHY:0,INT:0,AGI:0 },
    20020: { HP:0,PHY:10,INT:0,AGI:30 },
    30020: { HP:0,PHY:12,INT:0,AGI:36 },
    40020: { HP:0,PHY:15,INT:0,AGI:45 },
    50020: { HP:0,PHY:17,INT:0,AGI:51 },
    60020: { HP:0,PHY:21,INT:0,AGI:63 },
    70020: { HP:0,PHY:26,INT:0,AGI:78 },
    1021: { HP:0,PHY:59,INT:0,AGI:20 },
    2021: { HP:0,PHY:73,INT:0,AGI:24 },
    3021: { HP:0,PHY:86,INT:0,AGI:29 },
    4021: { HP:0,PHY:100,INT:0,AGI:33 },
    5021: { HP:0,PHY:113,INT:0,AGI:38 },
    10021: { HP:0,PHY:0,INT:0,AGI:0 },
    20021: { HP:0,PHY:30,INT:0,AGI:10 },
    30021: { HP:0,PHY:36,INT:0,AGI:12 },
    40021: { HP:0,PHY:45,INT:0,AGI:15 },
    50021: { HP:0,PHY:51,INT:0,AGI:17 },
    60021: { HP:0,PHY:63,INT:0,AGI:21 },
    70021: { HP:0,PHY:78,INT:0,AGI:26 },
    1022: { HP:117,PHY:0,INT:40,AGI:0 },
    2022: { HP:147,PHY:0,INT:48,AGI:0 },
    3022: { HP:171,PHY:0,INT:58,AGI:0 },
    4022: { HP:201,PHY:0,INT:66,AGI:0 },
    5022: { HP:225,PHY:0,INT:76,AGI:0 },
    10022: { HP:0,PHY:0,INT:0,AGI:0 },
    20022: { HP:60,PHY:0,INT:20,AGI:0 },
    30022: { HP:72,PHY:0,INT:24,AGI:0 },
    40022: { HP:90,PHY:0,INT:30,AGI:0 },
    50022: { HP:102,PHY:0,INT:34,AGI:0 },
    60022: { HP:126,PHY:0,INT:42,AGI:0 },
    70022: { HP:156,PHY:0,INT:52,AGI:0 },
    1023: { HP:117,PHY:20,INT:0,AGI:20 },
    2023: { HP:147,PHY:24,INT:0,AGI:24 },
    3023: { HP:171,PHY:29,INT:0,AGI:29 },
    4023: { HP:201,PHY:33,INT:0,AGI:33 },
    5023: { HP:225,PHY:38,INT:0,AGI:38 },
    10023: { HP:0,PHY:0,INT:0,AGI:0 },
    20023: { HP:60,PHY:10,INT:0,AGI:10 },
    30023: { HP:72,PHY:12,INT:0,AGI:12 },
    40023: { HP:90,PHY:15,INT:0,AGI:15 },
    50023: { HP:102,PHY:17,INT:0,AGI:17 },
    60023: { HP:126,PHY:21,INT:0,AGI:21 },
    70023: { HP:156,PHY:26,INT:0,AGI:26 },
    1024: { HP:177,PHY:20,INT:0,AGI:0 },
    2024: { HP:219,PHY:24,INT:0,AGI:0 },
    3024: { HP:258,PHY:29,INT:0,AGI:0 },
    4024: { HP:300,PHY:33,INT:0,AGI:0 },
    5024: { HP:339,PHY:38,INT:0,AGI:0 },
    10024: { HP:0,PHY:0,INT:0,AGI:0 },
    20024: { HP:90,PHY:10,INT:0,AGI:0 },
    30024: { HP:108,PHY:12,INT:0,AGI:0 },
    40024: { HP:135,PHY:15,INT:0,AGI:0 },
    50024: { HP:153,PHY:17,INT:0,AGI:0 },
    60024: { HP:189,PHY:21,INT:0,AGI:0 },
    70024: { HP:234,PHY:26,INT:0,AGI:0 },
    1025: { HP:0,PHY:20,INT:59,AGI:0 },
    2025: { HP:0,PHY:24,INT:73,AGI:0 },
    3025: { HP:0,PHY:29,INT:86,AGI:0 },
    4025: { HP:0,PHY:33,INT:100,AGI:0 },
    5025: { HP:0,PHY:38,INT:113,AGI:0 },
    10025: { HP:0,PHY:0,INT:0,AGI:0 },
    20025: { HP:0,PHY:10,INT:30,AGI:0 },
    30025: { HP:0,PHY:12,INT:36,AGI:0 },
    40025: { HP:0,PHY:15,INT:45,AGI:0 },
    50025: { HP:0,PHY:17,INT:51,AGI:0 },
    60025: { HP:0,PHY:21,INT:63,AGI:0 },
    70025: { HP:0,PHY:26,INT:78,AGI:0 },
    1026: { HP:117,PHY:0,INT:0,AGI:40 },
    2026: { HP:147,PHY:0,INT:0,AGI:48 },
    3026: { HP:171,PHY:0,INT:0,AGI:58 },
    4026: { HP:201,PHY:0,INT:0,AGI:66 },
    5026: { HP:225,PHY:0,INT:0,AGI:76 },
    10026: { HP:0,PHY:0,INT:0,AGI:0 },
    20026: { HP:60,PHY:0,INT:0,AGI:20 },
    30026: { HP:72,PHY:0,INT:0,AGI:24 },
    40026: { HP:90,PHY:0,INT:0,AGI:30 },
    50026: { HP:102,PHY:0,INT:0,AGI:34 },
    60026: { HP:126,PHY:0,INT:0,AGI:42 },
    70026: { HP:156,PHY:0,INT:0,AGI:52 },
    1027: { HP:0,PHY:0,INT:40,AGI:39 },
    2027: { HP:0,PHY:0,INT:49,AGI:48 },
    3027: { HP:0,PHY:0,INT:58,AGI:57 },
    4027: { HP:0,PHY:0,INT:67,AGI:66 },
    5027: { HP:0,PHY:0,INT:76,AGI:75 },
    10027: { HP:0,PHY:0,INT:0,AGI:0 },
    20027: { HP:0,PHY:0,INT:20,AGI:20 },
    30027: { HP:0,PHY:0,INT:24,AGI:24 },
    40027: { HP:0,PHY:0,INT:30,AGI:30 },
    50027: { HP:0,PHY:0,INT:34,AGI:34 },
    60027: { HP:0,PHY:0,INT:42,AGI:42 },
    70027: { HP:0,PHY:0,INT:0,AGI:0 },

};

let TeamAttr = {
    Attack: {
        Front : { HP:0, PHY:0, INT:0, AGI:0 },
        Middle : { HP:0, PHY:0, INT:0, AGI:0 },
        Back : { HP:0, PHY:0, INT:0, AGI:0 }
    },
    Defence: {
        Front : { HP:0, PHY:0, INT:0, AGI:0 },
        Middle : { HP:0, PHY:0, INT:0, AGI:0 },
        Back : { HP:0, PHY:0, INT:0, AGI:0 }
    }
}


function searchSide( element ) {

    return $(element).parents().hasClass('Attack') ? "Attack" : "Defence";
}
function searchOrder( element ) {
    let order;
    for ( let i = 0; i < OrderStr.length; i++ ) {
        if ( $(element).parents().hasClass( OrderStr[i] ) ) { order = OrderStr[i]; }
    }
    return order;
}
function searchSkillNumber( element ) {
    if ( $(element).hasClass('skill1') ) { return 0; }
    else if ( $(element).hasClass('skill2') ) { return 1; }
    else if ( $(element).hasClass('skill3') ) { return 2; }
    else { return 3; }
}

function calcAttr( element ) {
    
    const side = searchSide( element );
    const order = searchOrder( element );
    

    for ( let i = 0; i < AttrStr.length; i++ ) {
        TeamAttr[side][order][AttrStr[i]] = 0;
    }

    let position;
    $(element).parents().each( function() {
        if ( $(this).hasClass( order ) ) { position = this; return; }
    });
    
    let str = "合計能力値　";
    $(position).find('input').each( function() {
        TeamAttr[side][order][this.className] += parseInt( $(this).val() );
    });

    for ( let i = 0; i < AttrStr.length; i++ ) {
        str += AttrStr[i] + ": " + String(TeamAttr[side][order][AttrStr[i]]) + "　";
    }
    
    $(position).find('p').each( function() {
        if ( $(this).hasClass('attr_sum') ) {
            $(this).text(str)
        }
    });
    
}

function printTextArea() {
    // ID

    let str = new Array(12);
    for ( let i = 0; i < 12; i++ ) {
        str[i] = new Array(4);
    }

    $( 'textarea' ).val(null);

    // ID
    $( 'fieldset select' ).each( function() {

        if ( $(this).hasClass('children') ) {

            const side = searchSide( this );
            const order = searchOrder( this );

            const pos = ( SideToNum[side] * 3 + OrderToNum[order] )*2;

            if ( $(this).hasClass('hero') ) {
                const val1 = $(this.previousElementSibling).val();
                const val2 = $(this).val();
                // if ( !val1 || !val2 ) { $( 'textarea' ).val( $( 'textarea' ).val() + side + " " + order + " のヒーローが未設定です\n" ); }
                if ( !val1 || !val2 ) { str[pos][0] = "未設定"; }
                else {
                    const rarity = RarityToNum[ val1 ];
                    const n = parseInt( val2 );
                    const id = rarity + n;
                    str[pos][0] = String( id );
                }
                
            }
            else if ( $(this).hasClass('skill') ) {
                const val1 = $(this).val();
                const val2 = $(this.previousElementSibling).val();

                const n = searchSkillNumber(this);
                // if ( !val1 || !val2 ) { $( 'textarea' ).val( $( 'textarea' ).val() + side + " " + order + " のスキル" + String(n+1) + "が未設定です\n" ); }
                if ( !val1 || !val2 ) { str[pos][n+1] = "未設定"; }
                else {
                    const id = parseInt( val1 ) + parseInt( val2 );
                    str[pos][n+1] = String( id );
                }                
            }            
        }
        
    });


    for ( let i = 0; i < SideStr.length; i++ ) {
    for ( let j = 0; j < OrderStr.length; j++ ) {
    for ( let k = 0; k < AttrStr.length; k++ ) {
        const side = SideStr[i];
        const order = OrderStr[j];
        const attr = AttrStr[k];
        str[ ( SideToNum[side] * 3 + OrderToNum[order] )*2+1 ][ AttrToNum[attr] ] = TeamAttr[side][order][attr];
    }
    }
    }
    

    let s = "";
    for ( let i = 0; i < 12; i++ ) {
        let t = "";

        let n_art_edit_skill = 0;
        let all_id_done = true;

        for ( let j = 0; j < 4; j++ ) {

            if ( parseInt( str[i][j] ) >= ArtEditSkill ) { n_art_edit_skill++; }
            if ( str[i][j] == "未設定" ) { all_id_done = false; }

            t += str[i][j];
            if ( j != 3 ) { t += "\t"; }
        }

        if ( i%2 == 0 ) {
            if ( all_id_done && n_art_edit_skill == 0 ) { t += "　アートエディットスキルが設定されていません"; }
            if ( all_id_done && n_art_edit_skill > 1 ) { t += "　アートエディットスキルが複数設定されています"; }
        }

        s += t + "\n";


    }



    $( 'textarea' ).val( s );


}



$(document).ready( function(){


    // 能力値の input を追加
    const element = document.getElementsByClassName('attr_value');

    const target = document.getElementsByClassName('attr_input');

    $(target).each( function() {
        $(this).html( $(element).html() );

        $(this).find('input').each( function() {

            $(this).change( function() {
                calcAttr( this );
                printTextArea();
            });
            calcAttr( this );
            printTextArea();
        }); 
    });


    // ヒーローのレアリティを選択
    $('.parent.hero').each(function() {
        $(this).html( $('.parent.hero.dummy').html() );

        $(this).change( function(){
            const val1 = $(this).val();
            
            const children = $(this.nextElementSibling);

            children.html( $('.children.hero.dummy').html() ).find('option').each( function() {
                const val2 = $(this).data('val');
                if (val1 != val2) {
                    $(this).not($('.msg')).remove();
                }
            });

            children.val("");
            
            if ($(this).val() == "") {
                children.attr('disabled', 'disabled');
            }
            else  { children.removeAttr('disabled'); }

            // 能力値の設定をリセット
            let flag = false;
            $(this).parents().each( function() {
                if ( flag ) { return; }
                $(this).find('input').each( function() {
                    flag = true;
                    const name = this.className;
                    $(this).val(AttrAllZero[name]);
                }); 
            });

            calcAttr( this );
            printTextArea();
        });

    })

    // ヒーローを選択
    $('.children.hero').each(function() {
        $(this).html( $('.children.hero.dummy').html() );

        // 選択肢によって能力値を設定
        $(this).change( function() {
            
            const rarity = RarityToNum[ $(this.previousElementSibling).val() ];
            const n = parseInt( $(this).val() );            
            const id = rarity + n;            
            const attr = HeroAttr[String(id)];
            
            let flag = false;
            $(this).parents().each( function() {
                if ( flag ) { return; }
                $(this).find('input').each( function() {
                    flag = true;
                    const name = this.className;
                    $(this).val(attr[name]);
                }); 
                
            });
            

            calcAttr( this );
            printTextArea();
        });

    })

    // スキルの種類を選択
    $('.parent.skill').each(function() {
        $(this).html( $('.parent.skill.dummy').html() );

        $(this).change( function(){

            const val1 = ( parseInt( $(this).val() ) == ArtEditSkill ) ? "art_edit" : "extension";

            const children = $(this.nextElementSibling);
            
            children.html( $('.children.skill.dummy').html() ).find('option').each( function() {
                const val2 = $(this).data('val');
                if (val1 != val2) {
                    $(this).remove();
                }
            });

            children.val("");
            
            if ($(this).val() == "") {
                children.attr('disabled', 'disabled');
            }
            else  { children.removeAttr('disabled'); }

            // 能力値の設定をリセット
            let flag = false;
            $(this).parents().each( function() {
                if ( flag ) { return; }
                $(this).find('input').each( function() {
                    flag = true;
                    const name = this.className;
                    $(this).val(AttrAllZero[name]);
                }); 
            });

            calcAttr( this );
            printTextArea();

        });


    })

    // エクステンションのレアリティまたはアートエディットスキルを選択
    $('.children.skill').each(function() {
        $(this).html( $('.children.skill.dummy').html() );

        // 選択肢によって能力値を設定
        $(this).change( function() {
            const id = parseInt( $(this).val() ) + parseInt( $(this.previousElementSibling).val() );
            const attr = id >= ArtEditSkill ? AttrAllZero : ExtensionAttr[String(id)];
            
            let flag = false;
            $(this).parents().each( function() {
                if ( flag ) { return; }
                $(this).find('input').each( function() {
                    flag = true;
                    const name = this.className;
                    $(this).val(attr[name]);
                }); 
            });


            // $(this.parentNode).find('input').each( function() {
            //     const name = this.className;
            //     $(this).val(attr[name]);
            // });

            calcAttr( this );            
            printTextArea();
        });

    })








    


});