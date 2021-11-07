'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739848885444608/7f927b46-3d48-4b67-9d79-2d163fc39375.png?width=1029&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739936491888671/6a2be88e-b535-4b12-8e85-123a06d7abed.png?width=514&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739955408203786/5b74d248-76bf-431f-be62-71646c69f472.png?width=915&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906739991684722688/a2fb1893-2fdd-472b-a448-0730a3c7d047.png?width=514&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906632677304709120/906740026354851890/7cc2c216-580e-488a-afa2-61ccc7e5b4df.png?width=514&height=686', spotId: 1 },
      { url: 'https://media.discordapp.net/attachments/906651495087362058/906740196257718272/854ffca6-8038-4917-a259-f05109c0624b.png?width=915&height=686', spotId: 2 },
      { url: 'https://media.discordapp.net/attachments/906651495087362058/906740224397283368/08b3fdfd-0474-46b2-a30e-7b5fd6a3194d.png?width=457&height=686', spotId: 2 },
      { url: 'https://media.discordapp.net/attachments/906651495087362058/906740250481684480/6cfa57ea-e7ba-450f-a3a5-ddfe05ec403a.png?width=915&height=686', spotId: 2 },
      { url: 'https://media.discordapp.net/attachments/906651495087362058/906740277350387752/4be7300f-9cff-4dd3-b93e-51240f5d679b.png?width=457&height=686', spotId: 2 },
      { url: 'https://media.discordapp.net/attachments/906651495087362058/906740335428919356/a2e30f9b-579f-4dda-a2bc-6964f49fd55e.png?width=1029&height=686', spotId: 2 },
      { url: 'https://media.discordapp.net/attachments/906651518877433896/906740505839272026/405c4488-fca6-48c1-955d-f2ab1e8dc9e2.png?width=1028&height=686', spotId: 3 },
      { url: 'https://media.discordapp.net/attachments/906651518877433896/906740532196302878/ff89d89a-8912-40a5-8b46-697374ca7302.png?width=1028&height=686', spotId: 3 },
      { url: 'https://media.discordapp.net/attachments/906651518877433896/906740557383094332/524da46b-47f2-4a41-ae51-03f63b1567d1.png?width=1029&height=686', spotId: 3 },
      { url: 'https://media.discordapp.net/attachments/906651518877433896/906740587250720778/bc98d0e7-a146-4c8d-a3af-a97734122e13.png?width=1029&height=686', spotId: 3 },
      { url: 'https://media.discordapp.net/attachments/906651518877433896/906740637578170398/b5b972be-c145-48d0-a02e-275d4dd93ee8.png?width=1029&height=686', spotId: 3 },
      { url: 'https://media.discordapp.net/attachments/906651546631143534/906740848547495967/037c1b25-b76a-40a6-a491-ca6ab3205188.png?width=1029&height=686', spotId: 4 },
      { url: 'https://media.discordapp.net/attachments/906651546631143534/906740877198766130/4111e1e6-e79d-4240-bf75-1cb32c8c7060.png?width=1029&height=686', spotId: 4 },
      { url: 'https://media.discordapp.net/attachments/906651546631143534/906740900292608000/5fdf9acf-ed66-41f7-bdbe-3433aaf25ecb.png?width=1029&height=686', spotId: 4 },
      { url: 'https://media.discordapp.net/attachments/906651546631143534/906740923629711400/b8e29125-c08e-4643-8fee-004c7e875580.png?width=1029&height=686', spotId: 4 },
      { url: 'https://media.discordapp.net/attachments/906651546631143534/906740955502223410/da1d106a-e7eb-48c3-9c2a-94ffa1fc072a.png?width=1029&height=686', spotId: 4 },
      { url: 'https://media.discordapp.net/attachments/906651567128711238/906741244514926622/73b792ce-d1e5-4c3b-91bf-155def437e32.png?width=1029&height=686', spotId: 5 },
      { url: 'https://media.discordapp.net/attachments/906651567128711238/906741283425501235/20825afe-4cb2-4a09-a2cc-af44d9c36d53.png?width=1029&height=686', spotId: 5 },
      { url: 'https://media.discordapp.net/attachments/906651567128711238/906741302878674964/7d3c360c-b2be-47d1-a2bc-5d18a1627be1.png?width=1029&height=686', spotId: 5 },
      { url: 'https://media.discordapp.net/attachments/906651567128711238/906741328874962974/23c05b7f-ae3e-4f27-9ebe-9f69eb89540a.png?width=1029&height=686', spotId: 5 },
      { url: 'https://media.discordapp.net/attachments/906651567128711238/906741357916344320/de2a99c7-027b-4023-992a-a27e7aa073c0.png?width=458&height=686', spotId: 5 },
      { url: 'https://media.discordapp.net/attachments/906651588377083994/906741740499775528/9e661a57-1678-46b6-8f31-c9981bac66ea.png?width=915&height=686', spotId: 6 },
      { url: 'https://media.discordapp.net/attachments/906651588377083994/906741768274452501/60af1aa7-dc4a-4b1e-92f4-c1cb7f118dd2.png?width=514&height=686', spotId: 6 },
      { url: 'https://media.discordapp.net/attachments/906651588377083994/906741798527983636/51959b71-799e-4481-b0d8-dd980438c18a.png?width=915&height=686', spotId: 6 },
      { url: 'https://media.discordapp.net/attachments/906651588377083994/906741818765484052/d6d59258-1b5a-4687-a095-ab0ee101415c.png?width=915&height=686', spotId: 6 },
      { url: 'https://media.discordapp.net/attachments/906651588377083994/906741842341662770/be860726-72b4-442d-9273-1c93468de605.png?width=915&height=686', spotId: 6 },
      { url: 'https://media.discordapp.net/attachments/906651611613507615/906742093991542804/6b0937be-10c8-46ac-8f49-3baef0304d44.png?width=1029&height=686', spotId: 7 },
      { url: 'https://media.discordapp.net/attachments/906651611613507615/906742117299286106/121b539e-bc76-4114-b77b-66d977bb961d.png?width=1029&height=686', spotId: 7 },
      { url: 'https://media.discordapp.net/attachments/906651611613507615/906742138786689034/a73916a8-5819-457f-8af2-2812d489aeb2.png?width=1029&height=686', spotId: 7 },
      { url: 'https://media.discordapp.net/attachments/906651611613507615/906742159452012605/af26d05c-3423-4c38-90dc-023bdeb48c16.png?width=1029&height=686', spotId: 7 },
      { url: 'https://media.discordapp.net/attachments/906651611613507615/906742201533464616/23908467-d1fa-4b79-97b8-2fbda2c51dfb.png?width=1029&height=686', spotId: 7 },
      { url: 'https://media.discordapp.net/attachments/906651631247048714/906742394844745758/9386b4e1-cf0e-455e-adda-d5c3c027c36c.png?width=1029&height=686', spotId: 8 },
      { url: 'https://media.discordapp.net/attachments/906651631247048714/906742435768586250/1cfa159c-3f81-4aaa-8a25-22a03fd9ebc1.png?width=1029&height=686', spotId: 8 },
      { url: 'https://media.discordapp.net/attachments/906651631247048714/906742459017609287/6bcefd4f-d862-4a1e-ba9d-609905fb0828.png?width=1029&height=686', spotId: 8 },
      { url: 'https://media.discordapp.net/attachments/906651631247048714/906742484841947176/dfd57e6b-a036-48d9-9ad4-8bcc2d4680a9.png?width=1029&height=686', spotId: 8 },
      { url: 'https://media.discordapp.net/attachments/906651631247048714/906742514231410688/63cd4b2f-f78e-4c13-ad7e-8053f555fb82.png?width=1029&height=686', spotId: 8 },
      { url: 'https://media.discordapp.net/attachments/906651654521245746/906742649493520424/5047c16e-d40e-4d1c-a89e-7c1d1500c225.png?width=915&height=686', spotId: 9 },
      { url: 'https://media.discordapp.net/attachments/906651654521245746/906742673061326928/90fabbc0-e3bd-4944-97fc-513fb5c24998.png?width=915&height=686', spotId: 9 },
      { url: 'https://media.discordapp.net/attachments/906651654521245746/906742705386844190/8363a160-13e8-4684-9a58-c96a8fadc920.png?width=916&height=686', spotId: 9 },
      { url: 'https://media.discordapp.net/attachments/906651654521245746/906742728036061224/b48f2d64-27bc-4fc9-9588-5f3f6dc07a11.png?width=915&height=686', spotId: 9 },
      { url: 'https://media.discordapp.net/attachments/906651654521245746/906742767835811880/b2ea6b48-16d1-49f0-b9f4-127fd95ddbc2.png?width=514&height=686', spotId: 9 },
      { url: 'https://media.discordapp.net/attachments/906651670954508328/906743012799971348/bfc69167-2530-4712-986a-cf82bf38c607.png?width=915&height=686', spotId: 10 },
      { url: 'https://media.discordapp.net/attachments/906651670954508328/906743048183099392/0c19aef8-fbef-4ab2-8ab6-53134046c506.png?width=915&height=686', spotId: 10 },
      { url: 'https://media.discordapp.net/attachments/906651670954508328/906743067514650634/0feb996c-4ec0-4599-bc8a-0cd1e7bee78e.png?width=915&height=686', spotId: 10 },
      { url: 'https://media.discordapp.net/attachments/906651670954508328/906743092458188830/ba61a74a-4e78-4c54-b984-a42080603e0d.png?width=915&height=686', spotId: 10 },
      { url: 'https://media.discordapp.net/attachments/906651670954508328/906743131029012501/41826b22-014a-4223-a0b8-3171b5ad06a4.png?width=915&height=686', spotId: 10 },
      { url: 'https://media.discordapp.net/attachments/906651712239063131/906743470239137812/5a715c8f-9f1b-496b-8fc7-268f461762ff.png?width=1045&height=686', spotId: 11 },
      { url: 'https://media.discordapp.net/attachments/906651712239063131/906743494847127562/79ba4a3e-7870-4243-a6cf-41acf5d75cb9.png?width=1067&height=686', spotId: 11 },
      { url: 'https://media.discordapp.net/attachments/906651712239063131/906743516699435018/e0e56959-a18a-43c1-990d-1780232e5ffe.png?width=1067&height=686', spotId: 11 },
      { url: 'https://media.discordapp.net/attachments/906651712239063131/906743550383894568/f8f0544c-d3b7-4fff-a412-c2313d186816.png?width=997&height=686', spotId: 11 },
      { url: 'https://media.discordapp.net/attachments/906651712239063131/906743592868012092/4afbfbcb-de7f-4f57-b74f-bc2a12c03ba3.png?width=1067&height=686', spotId: 11 },
      { url: 'https://media.discordapp.net/attachments/906651729720930324/906743776830173204/f0846e6d-41c5-4dcc-b80b-97314ce42fb0.png?width=1029&height=686', spotId: 12 },
      { url: 'https://media.discordapp.net/attachments/906651729720930324/906743802419609651/b21ada4a-9a40-472b-a157-5dba187fdde0.png?width=1029&height=686', spotId: 12 },
      { url: 'https://media.discordapp.net/attachments/906651729720930324/906743845805494302/68c94afb-ed8f-4c63-8ff4-db0abcd599d6.png?width=1029&height=686', spotId: 12 },
      { url: 'https://media.discordapp.net/attachments/906651729720930324/906743877304729651/5470da8f-23a7-4698-bc3d-4a8b1237d7a0.png?width=1029&height=686', spotId: 12 },
      { url: 'https://media.discordapp.net/attachments/906651729720930324/906743893507313674/3b7559d2-8f55-4c02-8d76-795d01061219.png?width=1029&height=686', spotId: 12 },
      { url: 'https://media.discordapp.net/attachments/906651748876320808/906744102375268382/137e33ee-4af9-4baa-ac03-7c506241a520.png?width=1059&height=686', spotId: 13 },
      { url: 'https://media.discordapp.net/attachments/906651748876320808/906744138978983966/1bc1ecea-12a3-45bb-923d-9eef6cec3a27.png?width=915&height=686', spotId: 13 },
      { url: 'https://media.discordapp.net/attachments/906651748876320808/906744184445239336/7a13862e-3872-47ac-bdee-65dd04dcf1ab.png?width=1059&height=686', spotId: 13 },
      { url: 'https://media.discordapp.net/attachments/906651748876320808/906744221929734144/5349ba41-dccc-4e4d-8593-42e0c763187d.png?width=915&height=686', spotId: 13 },
      { url: 'https://media.discordapp.net/attachments/906651748876320808/906744310253379614/113c92c5-54f1-462f-858d-7735509e345f.png?width=1003&height=686', spotId: 13 },
      { url: 'https://media.discordapp.net/attachments/906651766177812491/906744485944389632/24c9176a-d532-41ce-be27-6c3d11d13bfd.png?width=1029&height=686', spotId: 14 },
      { url: 'https://media.discordapp.net/attachments/906651766177812491/906744532694097930/c2fe550a-d6b9-42ad-a17a-937282e86b21.png?width=915&height=686', spotId: 14 },
      { url: 'https://media.discordapp.net/attachments/906651766177812491/906744552629612624/85b0eddd-0842-4826-afb3-1025db3bf208.png?width=1029&height=686', spotId: 14 },
      { url: 'https://media.discordapp.net/attachments/906651766177812491/906744574972686356/34b6210e-c9d3-4017-ade6-3fc289d11666.png?width=1029&height=686', spotId: 14 },
      { url: 'https://media.discordapp.net/attachments/906651766177812491/906744607436582993/d435479c-262f-4f4e-b898-5373c295cfe1.png?width=915&height=686', spotId: 14 },
      { url: 'https://media.discordapp.net/attachments/906651783181516870/906744808259854347/356e8182-72db-4e4f-974a-65e89cc78b15.png?width=1029&height=686', spotId: 15 },
      { url: 'https://media.discordapp.net/attachments/906651783181516870/906744840644071444/b125cd82-1bcf-4df1-90af-bad1095e4df9.png?width=1029&height=686', spotId: 15 },
      { url: 'https://media.discordapp.net/attachments/906651783181516870/906744861171023913/f6bfc538-7f94-459d-a94e-cf42b7c56697.png?width=1029&height=686', spotId: 15 },
      { url: 'https://media.discordapp.net/attachments/906651783181516870/906744886374576138/daa76804-f6c3-4f14-866c-60799f147cff.png?width=1029&height=686', spotId: 15 },
      { url: 'https://media.discordapp.net/attachments/906651783181516870/906744933078147144/ecd4284e-ad3b-4ed1-86c2-8308b02b03e3.png?width=1029&height=686', spotId: 15 },
      { url: 'https://media.discordapp.net/attachments/906651798360694785/906745258992336896/ccc7c680-f00d-4702-83cc-7897bac5a595.png?width=915&height=686', spotId: 16 },
      { url: 'https://media.discordapp.net/attachments/906651798360694785/906745283218645022/6bdbbe2a-0fbc-4571-a719-d87781ba02b6.png?width=915&height=686', spotId: 16 },
      { url: 'https://media.discordapp.net/attachments/906651798360694785/906745311110778880/c4e73149-fd87-4506-96ce-4a16f44bac3b.png?width=1029&height=686', spotId: 16 },
      { url: 'https://media.discordapp.net/attachments/906651798360694785/906745336956092446/0eed8507-80e6-4037-9f06-4395db6abf3a.png?width=1029&height=686', spotId: 16 },
      { url: 'https://media.discordapp.net/attachments/906651798360694785/906745430480662538/12f608e3-3de0-4f1b-a890-e10bb68e5e2e.png?width=1029&height=686', spotId: 16 },
      { url: 'https://media.discordapp.net/attachments/906651814194184232/906745653265330286/82751339-ec6e-44ef-a889-a4c6c5bb99e9.png?width=915&height=686', spotId: 17 },
      { url: 'https://media.discordapp.net/attachments/906651814194184232/906745678384996352/af5bd994-7189-44ea-af87-dd4e98432c86.png?width=1067&height=686', spotId: 17 },
      { url: 'https://media.discordapp.net/attachments/906651814194184232/906745700677726208/e30ea3bc-af3b-4ff7-8f9c-9ef05f139836.png?width=1124&height=686', spotId: 17 },
      { url: 'https://media.discordapp.net/attachments/906651814194184232/906745727101841418/fd4dadcc-8aa2-42a4-a086-a88b0c54db0a.png?width=966&height=686', spotId: 17 },
      { url: 'https://media.discordapp.net/attachments/906651814194184232/906745761725833266/633ecd11-60ed-4508-960b-c4c0014bce86.png?width=915&height=686', spotId: 17 },
      { url: 'https://media.discordapp.net/attachments/906651833806749726/906746501118693386/ce4fe9d7-fe2c-4351-9e1c-b4ea1d72dc6e.png?width=1029&height=686', spotId: 18 },
      { url: 'https://media.discordapp.net/attachments/906651833806749726/906746524850065408/83f12119-02ff-4bad-a0c5-6fc067902d76.png?width=1029&height=686', spotId: 18 },
      { url: 'https://media.discordapp.net/attachments/906651833806749726/906746544651391016/8af507b2-4a46-4b08-9af9-4dbc989e68e7.png?width=1029&height=686', spotId: 18 },
      { url: 'https://media.discordapp.net/attachments/906651833806749726/906746562695278642/245971c8-6d9b-4420-8139-1c59c3ea8dcc.png?width=1029&height=686', spotId: 18 },
      { url: 'https://media.discordapp.net/attachments/906651833806749726/906746584430149652/935a395b-ee5d-4ab2-9d34-a4ce7fff7a1e.png?width=1029&height=686', spotId: 18 },
      { url: 'https://media.discordapp.net/attachments/906651852651769936/906746241671626772/b3ccf53b-c474-4f20-824c-3df26cd31c5b.png?width=1029&height=686', spotId: 19 },
      { url: 'https://media.discordapp.net/attachments/906651852651769936/906746274286542928/f4db9619-ed5b-4c4f-86e2-13a9e5fca673.png?width=1029&height=686', spotId: 19 },
      { url: 'https://media.discordapp.net/attachments/906651852651769936/906746295694286878/a1b04861-2070-4a76-b1a2-252487d57bd6.png?width=1029&height=686', spotId: 19 },
      { url: 'https://media.discordapp.net/attachments/906651852651769936/906746319283040309/c5d1251c-7ead-4b52-8a5c-155c9e0e1076.png?width=1029&height=686', spotId: 19 },
      { url: 'https://media.discordapp.net/attachments/906651852651769936/906746344528547880/f24a60ef-9259-42bb-882c-8707f8f7d939.png?width=1029&height=686', spotId: 19 },
      { url: 'https://media.discordapp.net/attachments/906651871085748265/906747243149791292/ccac680e-0fcc-4636-a4ea-e2e78030833f.png?width=1029&height=686', spotId: 20 },
      { url: 'https://media.discordapp.net/attachments/906651871085748265/906747270744125531/3bd3e72e-dfd0-46f5-b919-8ec3b5d17303.png?width=1029&height=686', spotId: 20 },
      { url: 'https://media.discordapp.net/attachments/906651871085748265/906747294148358154/793f9393-6b55-4eb8-a1bb-21a43244f268.png?width=1029&height=686', spotId: 20 },
      { url: 'https://media.discordapp.net/attachments/906651871085748265/906747316185223219/724b9c94-0c4c-4497-802b-aa1d609e774c.png?width=1029&height=686', spotId: 20 },
      { url: 'https://media.discordapp.net/attachments/906651871085748265/906747334749224960/af181fed-e3cb-4a73-963e-501c4114a397.png?width=1029&height=686', spotId: 20 },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});

  }
};
