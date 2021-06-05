// pages/Find/Find.js
const app = getApp()

Page({

  data: {
    current: '/images/ba.jpg',
    currentView: 1,
    swiperImg: [
      { src: '/images/44.jpg' },
      { src: '/images/55.jpg' },
      { src: '/images/66.jpg' },
    ],
    movieList: [
      {
        img: '/images/ba.jpg',
        title: "霸王别姬",
        dierctor: "陈凯歌",
        actor: "张国荣，巩俐，张丰毅，葛优，英达，雷汉",
        content: "影片围绕两位京剧伶人半个世纪的悲欢离合···"
      },
      {
        img: '/images/xiang.jpg',
        title: "香水",
        dierctor: "汤姆·提克威",
        actor: "本·威士肖、达斯汀·霍夫曼、蕾切儿·哈伍德，艾伦·里克曼",
        content: "该片依据帕特里克·聚斯金德的同名小说改编而成···"
      },
      {
        img: '/images/《泰坦尼克号》.jpg',
        title: "泰坦尼克号",
        dierctor: "詹姆斯·卡梅隆",
        actor: "莱昂纳多·迪卡普里奥、凯特·温斯莱特",
        content: "影片以1912年泰坦尼克号邮轮在其处女启航时触礁冰山而沉没的事件为背景，讲述了···"
      },
      {
        img: '/images/《杀死比尔》.jpg',
        title: "杀死比尔",
        dierctor: "昆汀·塔伦蒂诺",
        actor: "乌玛·瑟曼、刘玉玲、千叶真一等",
        content: "故事讲述了一个新娘（乌玛·瑟曼Uma Thurman饰）在自己的婚礼上遭到了···"
      },
      {
        img: '/images/《西西里的美丽传说》.jpg',
        title: "西西里的美丽传说",
        dierctor: "朱塞佩·托纳多雷",
        actor: "朱塞佩·托纳多雷、圭塞佩·苏尔法罗",
        content: "该片通过少年雷纳多的视角，讲述了二战时期的意大利西西里岛上的···"
      },
      {
        img: '/images/《辛德勒的名单》.jpg',
        title: "辛德勒的名单",
        dierctor: "史蒂文·斯皮尔伯格",
        actor: "连姆·尼森、本·金斯利、拉尔夫·费因斯、艾伯丝·戴维兹等",
        content: "该片改编自澳大利亚小说家托马斯·肯尼利的同名小说，讲述了···"
      },
      {
        img: '/images/《海上钢琴师》.jpg',
        title: "海上钢琴师",
        dierctor: "蒂姆·罗斯、比尔·努恩、梅兰尼·蒂埃里",
        actor: "连姆·尼森、本·金斯利、拉尔夫·费因斯、艾伯丝·戴维兹等",
        content: "该片改编自亚利桑德罗·巴里克文学剧本《1900：独白》，讲述了···"
      }
    ],
    bookList: [
      {
        img: '/images/《解忧杂货店》.jpg',
        title: "《解忧杂货铺》",
        writer: "东野圭吾",
        content: "该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答"

      },
      {
        img: '/images/proud.jpg',
        title: "《傲慢与偏见》",
        writer: "简·奥斯汀",
        content: "小说描写了小乡绅班纳特五个待嫁闺中的千金，主角是二女儿伊丽莎白。她在舞会上认识了达西，但是耳闻他为人傲慢，一直对他心生排斥，经历一番周折"

      },
      {
        img: '/images/snow.jpg',
        title: "《雪国》",
        writer: "川端康成",
        content: "故事写的是东京一位名叫岛村的舞蹈艺术研究家，三次前往雪国的温泉旅馆，与当地一位名叫驹子的艺妓、一位萍水相逢的少女叶子之间发生的感情纠葛"

      },
      {
        img: '/images/live.jpg',
        title: "《活着》",
        writer: "余华",
        content: "讲述了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。"

      },
      {
        img: '/images/《白鹿原》.jpg',
        title: "《白鹿原》",
        writer: "川端康成",
        content: "《白鹿原》以白嘉轩为叙事核心，白鹿两家矛盾纠葛组织情节，以反映白嘉轩所代表的宗法家族制度及儒家伦理道德，在时代变迁与政治运动中的坚守与颓败为叙事线索，讲述了白鹿原村里两大家族白家和鹿家之间的故事"

      },
      {
        img: '/images/《人间失格》.jpg',
        title: "《人间失格》",
        writer: "太宰治",
        content: "《人间失格》以“我”看到叶藏的三张照片后的感想开头，中间是叶藏的三篇手记，而三篇手记与照片对应，分别介绍了叶藏幼年、青年和壮年时代的经历，描述了叶藏是如何一步一步走向丧失为人资格的道路的。"
      },
      {
        img: '/images/snow.jpg',
        title: "《堂吉诃德》",
        writer: "川端康成",
        content: "故事发生时，骑士早已绝迹一个多世纪，但主角阿隆索·吉哈诺（唐·吉诃德原名）却因为沉迷于骑士小说，时常幻想自己是个中世纪骑士，进而自封为“唐·吉诃德·德·拉曼恰”（德·拉曼恰地区的守护者）"

      },
      {
        img: '/images/world.jpg',
        title: "《悲惨世界》",
        writer: "维克多·雨果",
        content: "内容涵盖了拿破仑战争和之后的十几年的时间。故事的主线围绕主人公土伦苦刑犯冉·阿让（Jean Valjean）的个人经历，融进了法国的历史、革命、战争、道德哲学、法律、正义、宗教信仰。"


      },
      {
        img: '/images/《肖申克的救赎》.jpg',
        title: "《肖申克的救赎》",
        writer: "斯蒂芬·金",
        content: "该作讲述银行家安迪，被当作杀害妻子的凶手送上法庭。妻子的不忠、律师的奸诈、法官的误判、狱警的凶暴、典狱长的贪心与卑鄙，将正处在而立之年的安迪一下子从人生的巅峰推向了世间地狱。"

      },
    ]

  }, 
 
  tabItemTap:function(e){
    var _dataSet = e.currentTarget.dataset;
    this.setData({
      currentView: _dataSet.view
    })
  }
})