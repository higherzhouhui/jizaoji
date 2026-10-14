export type CaseType = "website" | "app" | "miniprogram" | "ai" | "all";
export type CaseIndustry = "ecommerce" | "education" | "enterprise" | "food" | "all";

export type Copy = { zh: string; en: string };

export const CASE_TYPES = [
  { value: "all" as CaseType, label: "全部" },
  { value: "website" as CaseType, label: "网站搭建" },
  { value: "app" as CaseType, label: "APP 开发" },
  { value: "miniprogram" as CaseType, label: "微信小程序" },
  { value: "ai" as CaseType, label: "AI 工具" },
];

export const CASE_INDUSTRIES = [
  { value: "all" as CaseIndustry, label: "全部行业" },
  { value: "ecommerce" as CaseIndustry, label: "电商/零售" },
  { value: "education" as CaseIndustry, label: "教育/培训" },
  { value: "enterprise" as CaseIndustry, label: "企业/办公" },
  { value: "food" as CaseIndustry, label: "餐饮/生活服务" },
];

export interface CaseItem {
  id: string;
  title: string;
  titleEn: string;
  type: CaseType;
  industry: CaseIndustry;
  clientBrief: string;
  solutionBrief: string;
  metrics: string[];
  image?: string;
  featured?: boolean;
  /** 外行也能懂的「当时卡在哪」 */
  situation: Copy;
  /** 做完之后手里有什么 */
  delivered: Copy;
  story: Copy;
  solutionEn: string;
  backgroundEn: string;
  metricsEn: string[];
  stat: { value: Copy; label: Copy };
  likeYou: Copy;
}

const c = (zh: string, en: string): Copy => ({ zh, en });

export const CASES_LIST: CaseItem[] = [
  {
    id: "1",
    title: "家具店的货，不再各算各的",
    titleEn: "One furniture brand, one stock count",
    type: "miniprogram",
    industry: "ecommerce",
    clientBrief: "线下 50 多家门店，线上还有天猫。库存和订单各记各的，店里说有货，线上已经卖掉了。",
    solutionBrief: "品牌小程序商城，库存、订单、会员打通，支持门店自提。",
    metrics: ["库存周转从 45 天降到 28 天", "双 11 订单量同比多一倍，系统没有宕机"],
    featured: true,
    image: "/images/cases/jiaju.jpg",
    situation: c(
      "五十多家店，加上天猫。客人在店里看中的沙发，网上可能已经卖掉，店员还在打电话问仓库。",
      "Fifty-plus stores, plus Tmall. A sofa on the shop floor might already be sold online, and staff were still calling the warehouse."
    ),
    delivered: c(
      "客人用小程序下单，可以送到家，也可以到附近的店里取。店员和网店看的是同一份库存。",
      "Customers order in a mini program, for delivery or pickup at a nearby store. The shop and the online store share one stock count."
    ),
    story: c(
      "老板原来要等月底才知道哪些货压着。现在打开后台，能看见哪一家店的货转得动、哪一件在网上卖得快。双十一订单比去年多了一倍，当天系统没有倒下。",
      "The owner used to wait until month-end to see what was stuck. The back office now shows which store is moving goods and what is selling online. Double-eleven orders doubled, and the system stayed up."
    ),
    solutionEn: "A branded mini-program shop with shared stock, orders, and members, plus in-store pickup.",
    backgroundEn: "50+ stores and a Tmall shop, each keeping its own stock and orders.",
    metricsEn: ["Stock turned in 28 days, down from 45", "Double-eleven orders doubled year on year, with no outage"],
    stat: { value: c("28天", "28 days"), label: c("库存周转。原来要 45 天。", "Stock now turns in 28 days. It used to take 45.") },
    likeYou: c(
      "你也有好几家店，线上线下各卖各的，经常卖重或卖空。",
      "You also have several stores, online and offline selling past each other."
    ),
  },
  {
    id: "2",
    title: "茶饮店高峰，门口不再堵住",
    titleEn: "The tea shop queue moved into WeChat",
    type: "miniprogram",
    industry: "food",
    clientBrief: "二十多家茶饮店，一到下午人就把门口堵住。点单、叫号、会员，全靠店员喊。",
    solutionBrief: "小程序先点单、到店取，加上会员和每家店的营业数据。",
    metrics: ["高峰排队时间大约少了四成", "从自己的小程序来的订单，超过三成"],
    featured: true,
    image: "/images/cases/liansuocha.jpg",
    situation: c(
      "下午三四点，队从柜台排到门口。店员一边点单一边喊号，老客人也留不下联系方式，下次还是靠路过。",
      "At three or four in the afternoon the line reached the door. Staff took orders and shouted numbers. Regulars left no contact, and came back only if they walked past."
    ),
    delivered: c(
      "客人在微信里先点好，到店报手机号取。积分和券在同一个小程序里。老板看一个页面，就知道每家店今天卖了多少。",
      "People order in WeChat and pick up with a phone number. Points and coupons live in the same mini program. One screen shows what each shop sold today."
    ),
    story: c(
      "店门口终于能走人。超过三成的订单来自自己的小程序，不再完全靠外卖平台。高峰时客人站着等的时间，大约少了四成。",
      "The doorway is walkable again. More than a third of orders come from their own mini program, not only from delivery apps. The wait at rush hour dropped by about 40%."
    ),
    solutionEn: "Order-ahead and pickup, membership, and a simple view of every shop.",
    backgroundEn: "20+ tea shops. The afternoon rush blocked the door, and membership lived in the staff’s heads.",
    metricsEn: ["Rush-hour waiting fell by about 40%", "Over a third of orders now come from their own mini program"],
    stat: { value: c("40%", "40%"), label: c("高峰排队，大约少了这么多。", "About this much less waiting at rush hour.") },
    likeYou: c(
      "你也开店，忙的时候队排到门口，客人点完就走，下次认不出他。",
      "You run shops too. The rush blocks the door, and a customer leaves without you knowing who they were."
    ),
  },
  {
    id: "3",
    title: "两百人的公司，审批不用再追",
    titleEn: "Approvals that no longer need chasing",
    type: "app",
    industry: "enterprise",
    clientBrief: "大约两百人，人在不同城市。请假、报销、项目，散落在好几个软件里。",
    solutionBrief: "一个应用里完成沟通、文档、会议、审批和考勤，并和原来的账号接通。",
    metrics: ["八成以上的审批在手机上办完", "考勤和人事、工资用的是同一份数据"],
    featured: true,
    image: "/images/cases/xietongpingtai.jpg",
    situation: c(
      "人在外面，一个请假要在微信里找领导，报销在另一个表里，考勤又是第三套。批完没有人知道下一关在谁手上。",
      "People worked in different cities. Leave lived in a chat thread, expenses in another sheet, attendance in a third system. Nobody knew whose desk a request was on."
    ),
    delivered: c(
      "手机上能请假、报销、看考勤。批到哪一步，提交的人自己看得到。工资用的考勤，和员工打卡的是同一份。",
      "Leave, expenses, and attendance happen on the phone. The person who submitted can see whose turn it is. Payroll reads the same attendance the employee clocked."
    ),
    story: c(
      "超过八成的审批不用再回办公室。财务不用月底把三份表对到一起。",
      "More than 80% of approvals no longer wait for a desk. Finance stopped reconciling three sheets at month-end."
    ),
    solutionEn: "One app for chat, documents, meetings, approvals, and attendance, signed in with the company account.",
    backgroundEn: "About 200 people in several cities, with approvals and attendance split across tools.",
    metricsEn: ["Over 80% of approvals finished on a phone", "Attendance, HR, and payroll share one set of numbers"],
    stat: { value: c("80%", "80%"), label: c("审批在手机上就办完了。", "Approvals finished on a phone.") },
    likeYou: c(
      "你的人也分散在几地，一件审批要在聊天记录里翻。",
      "Your people are spread out, and an approval means scrolling a chat."
    ),
  },
  {
    id: "4",
    title: "品牌官网，终于能把人留下来",
    titleEn: "A brand site that keeps the visit",
    type: "website",
    industry: "ecommerce",
    clientBrief: "品牌想自己接待客人，不再只靠平台。旧官网讲不清卖什么，手机上也不好读。",
    solutionBrief: "重做官网，让人从看懂产品走到留下联系方式，并让搜索能找到。",
    metrics: ["上线三个月，访问量多出大约一倍半"],
    image: "/images/cases/pingpaiguanw.jpg",
    situation: c(
      "客人从广告点进来，手机上要放大才能看字，看完不知道下一步是买还是问。",
      "People arrived from ads, pinched to read on a phone, and left without a clear way to buy or ask."
    ),
    delivered: c(
      "手机上能读完、能看产品、能留下联系方式。搜品牌名，能打开这一页，而不是只打开商场。",
      "A phone can read the story, see the products, and leave a contact. Searching the brand opens this site, not only a marketplace."
    ),
    story: c(
      "上线三个月，来的人比原来多了大约一倍半。销售拿到的是留过联系方式的人，不是一个看不出结果的访问量。",
      "In three months, visits were up about 150%. Sales received people who had left a way to reply, not a vanity visitor count."
    ),
    solutionEn: "A rebuilt site with a clear path from product to enquiry, and search set up so the brand can be found.",
    backgroundEn: "The brand wanted its own front door. The old site was unclear and hard to read on a phone.",
    metricsEn: ["Visits up about 150% within three months of launch"],
    stat: { value: c("150%", "150%"), label: c("上线三个月，访问多出来的部分。", "Extra visits in the first three months.") },
    likeYou: c("你也有一个网站，但没人看完，更没人留下电话。", "You have a site too, and people neither finish it nor leave a number."),
  },
  {
    id: "5",
    title: "一次旅行，不用再装六个应用",
    titleEn: "A trip that no longer needs six apps",
    type: "miniprogram",
    industry: "ecommerce",
    clientBrief: "一个地方的文旅，吃住行游购娱各管各的，客人要装好几个东西，商家核销对不齐。",
    solutionBrief: "一个小程序里预订和核销，把多家商户接进来，活动也能做。",
    metrics: ["吃住行游购娱可以在一处办完", "到店扫码就能核销"],
    image: "/images/cases/zhihuilvy.jpg",
    situation: c(
      "客人订了房，门票在另一个地方，吃饭又要再注册一次。商家月底对「到底核销了没有」。",
      "A room was booked in one place, tickets in another, dinner required yet another sign-up. Merchants argued at month-end about what had been redeemed."
    ),
    delivered: c(
      "吃、住、门票、活动，在一个小程序里看和订。到店出示码，商家扫一下，这一单就结了。",
      "Food, rooms, tickets, and events are booked in one mini program. At the door, a code is scanned and the order is settled."
    ),
    story: c(
      "游客不用再问「这个在哪个软件买」。景区和商家看得到哪一张券用过了。",
      "Visitors stopped asking which app to use. The venue and the merchant can both see which voucher was used."
    ),
    solutionEn: "Booking and redemption in one mini program, with several kinds of merchants on it.",
    backgroundEn: "A regional tourism service split food, rooms, and tickets across tools, and redemption did not match.",
    metricsEn: ["Food, stay, travel, tickets, shopping, and fun in one place", "Redeemed with a scan on arrival"],
    stat: { value: c("一处", "One place"), label: c("吃住行游购娱，扫码就能办。", "The whole trip, handled with a scan.") },
    likeYou: c("你也在做一个地方的服务，客人被好几个入口绕晕。", "You also serve a place, and guests get lost between too many doors."),
  },
  {
    id: "6",
    title: "公司要手机应用，不用做两遍",
    titleEn: "A company app, built once",
    type: "app",
    industry: "enterprise",
    clientBrief: "要在苹果和安卓上审批、看项目。如果各做一套，以后改一个功能要改两次。",
    solutionBrief: "一套代码发布到两端，里面是协同和审批。",
    metrics: ["苹果和安卓共用一套代码，以后改一处即可"],
    image: "/images/cases/qiyexietong.jpg",
    situation: c(
      "员工有的用苹果，有的用安卓。公司怕做两套，以后改一句话要找两拨人。",
      "Some staff used iPhones, some Android. Two separate apps would mean two bills for every small change."
    ),
    delivered: c(
      "两端都能装。请假和项目在手机上办。以后改功能，改一次就行。",
      "Both phones can install it. Leave and projects are handled there. A change is made once."
    ),
    story: c(
      "上线之后，没有出现「安卓有、苹果还没有」的功能差。维护的是一份东西。",
      "After launch, features did not drift between the two phones. There is one thing to maintain."
    ),
    solutionEn: "One codebase shipped to both app stores, with collaboration and approvals.",
    backgroundEn: "The company needed approvals and projects on both iPhone and Android without building twice.",
    metricsEn: ["One codebase for both stores, so a change is made once"],
    stat: { value: c("一套", "Once"), label: c("写一遍，苹果和安卓都能装。", "Written once. Installed on both.") },
    likeYou: c("你也需要一个自己的应用，但不想为两个手机店付两份钱。", "You need your own app, and you do not want to pay twice for two stores."),
  },
  {
    id: "7",
    title: "培训机构知道谁该续费了",
    titleEn: "A school that can see who should renew",
    type: "website",
    industry: "education",
    clientBrief: "一年大约招五千人，主要靠线下。谁听完了课、谁该续费，老师靠印象。",
    solutionBrief: "官网和小程序招生，课可以直播或回放，教务和学员档案、数据在一处。",
    metrics: ["从留资到付钱，中间能看见", "完课和续费不再只靠老师记得"],
    image: "/images/cases/zhiyepeixun.jpg",
    situation: c(
      "招生靠传单和微信。一个人有没有听完，要问班主任。续费季一到，全靠老师翻聊天记录。",
      "Enrolment was leaflets and WeChat. Whether someone finished was a question for the class teacher. Renewal season meant scrolling chats."
    ),
    delivered: c(
      "想学的人在网上留电话、预约。课能直播也能回看。谁听完、谁该续，打开一页就能看见。",
      "People leave a number and book online. Classes can be live or replayed. Who finished, and who should renew, is on one page."
    ),
    story: c(
      "市场不用再问「这个人后来付钱了没有」。教务排课和学员档案在一起，不用两套表。",
      "Marketing stopped asking whether a lead later paid. Scheduling and student records live together."
    ),
    solutionEn: "A site and mini program for enrolment, live and recorded classes, and one student record.",
    backgroundEn: "About 5,000 learners a year, mostly offline, with completion and renewal hard to see.",
    metricsEn: ["The path from enquiry to payment is visible", "Completion and renewal are no longer memory"],
    stat: { value: c("看得见", "Visible"), label: c("谁听完、谁该续费，不用再猜。", "Who finished, and who should renew, is no longer a guess.") },
    likeYou: c("你也在招生，线索进了微信就找不回来。", "You enrol people too, and a lead disappears into a chat."),
  },
  {
    id: "8",
    title: "货该补多少，不用只靠老师傅",
    titleEn: "Restocking with a suggestion, not a hunch",
    type: "ai",
    industry: "ecommerce",
    clientBrief: "货很多，补货和「给客人推荐什么」都靠有经验的人拍板，人一忙就乱。",
    solutionBrief: "按卖过的情况给出推荐，并给出补货建议。",
    metrics: ["推荐更常被点开", "补货建议比纯人工更稳"],
    image: "/images/cases/lingshouqiye.jpg",
    situation: c(
      "货一多，该进什么全看老师傅。老师傅休假，货要么断，要么堆在仓里。首页推荐也是随便放。",
      "With many products, one experienced person decided what to reorder. On their day off, items ran out or piled up. The homepage was whatever someone last pinned."
    ),
    delivered: c(
      "系统按近期卖掉的情况，建议补哪些、建议首页放哪些。人还是最后拍板，但不用从一张白纸开始。",
      "The system suggests what to restock and what to show, from recent sales. A person still decides, but not from a blank page."
    ),
    story: c(
      "采购打开的是一份建议，不是一个空表。客人更常点开被推荐的货。",
      "Purchasing opens a suggestion, not an empty sheet. People click the recommended goods more often."
    ),
    solutionEn: "Recommendations and restock suggestions based on what actually sold.",
    backgroundEn: "Too many products. Restocking and recommendations depended on one person’s instinct.",
    metricsEn: ["Recommended goods are clicked more often", "Restock suggestions are steadier than guesswork"],
    stat: { value: c("有建议", "A draft"), label: c("补什么货，系统先给一版。", "What to restock starts as a suggestion.") },
    likeYou: c("你的货很多，补货全靠一个人记得。", "You have many products, and one person is expected to remember them all."),
  },
  {
    id: "9",
    title: "美妆不再只活在平台上",
    titleEn: "A beauty brand with its own counter",
    type: "website",
    industry: "ecommerce",
    clientBrief: "美妆品牌想有自己的地方卖，而不是只在平台上租一个柜台。老客回头，平台看不见。",
    solutionBrief: "官网商城加微信小程序，会员积分和老客带来新客。",
    metrics: ["一位顾客一年大约多花 15%", "回头买的比例上来了"],
    image: "/images/cases/meizhuang.jpg",
    situation: c(
      "客人在平台买完就走。品牌不知道她是谁，下一次活动还得再花钱把她买回来。",
      "A customer bought on a marketplace and vanished. The brand did not know who she was, and paid again to find her next time."
    ),
    delivered: c(
      "自己的网站和小程序都能买。积分还在，老客可以把新客带进来。这些人都留在品牌自己这里。",
      "The site and the mini program both sell. Points remain. A regular can bring someone new. Those people stay with the brand."
    ),
    story: c(
      "同一位顾客一年下来多花了大约 15%。回头买不再只发生在平台的规则里。",
      "The same customer spent about 15% more across a year. Repeat buying is no longer only inside a marketplace’s rules."
    ),
    solutionEn: "A shop on the website and in WeChat, with points and a way for regulars to bring someone new.",
    backgroundEn: "A beauty brand wanted to stop renting its only counter from a marketplace.",
    metricsEn: ["About 15% more spent per customer across a year", "A larger share of repeat orders on their own channels"],
    stat: { value: c("15%", "15%"), label: c("同一位顾客，一年大约多花这些。", "About this much more from the same customer in a year.") },
    likeYou: c("你的货主要在平台上卖，客人不是你的。", "You mostly sell on a marketplace, and the customer is not yours."),
  },
  {
    id: "10",
    title: "生鲜说好送到，就更能送到",
    titleEn: "Groceries that arrive when promised",
    type: "miniprogram",
    industry: "food",
    clientBrief: "社区生鲜，货在前置仓。订单来了，拣货和配送对不上，说好的时间经常食言。",
    solutionBrief: "小程序下单，仓里按单拣货，并接上即时配送。",
    metrics: ["按约定送到的比例从 75% 到 92%"],
    featured: true,
    image: "/images/cases/shengxian.jpg",
    situation: c(
      "客人下了单，仓里还在找货。骑手到了，货没拣完。答应一小时送到的，常常要一个半小时，客人就不再下第二次。",
      "The order arrived before the warehouse had found the goods. The rider arrived before the pick was finished. A one-hour promise often took ninety minutes, and there was no second order."
    ),
    delivered: c(
      "客人在小程序里看得到附近有什么。仓里按这一单拣，拣完再叫骑手。答应的时间，更经常守得住。",
      "The mini program shows what is actually nearby. The warehouse picks that order, then calls the rider. The promised time is kept more often."
    ),
    story: c(
      "按约定完成的订单，从大约七成五，到九成二。客服少接一种电话：「我的菜呢」。",
      "Orders kept as promised rose from about 75% to 92%. Support took fewer calls asking where the vegetables were."
    ),
    solutionEn: "A mini-program shop, picking inside the forward warehouse, and a handoff to instant delivery.",
    backgroundEn: "Neighbourhood groceries from a forward warehouse. Picking and delivery did not meet the promised time.",
    metricsEn: ["Orders fulfilled as promised rose from 75% to 92%"],
    stat: { value: c("92%", "92%"), label: c("说好的时间送到。原来大约只有 75%。", "Arrived as promised. It used to be about 75%.") },
    likeYou: c("你也是接单再发货，客人最常问的是「怎么还没到」。", "You take an order and then send it, and the usual question is “where is it?”"),
  },
  {
    id: "11",
    title: "试听课，终于知道有没有来",
    titleEn: "Trial lessons you can actually follow",
    type: "website",
    industry: "education",
    clientBrief: "学科辅导靠官网收电话。留下电话的人有没有来试听，销售自己记。",
    solutionBrief: "官网讲课程，试听可以预约，线索分给对应的人去跟。",
    metrics: ["留下电话之后，有没有来试听，跟得上", "获客花费更清楚"],
    image: "/images/cases/k12.jpg",
    situation: c(
      "广告点进来，留下一个电话。这个人后来有没有坐到教室里，市场部不知道，只知道花了广告费。",
      "An ad produced a phone number. Whether that person ever sat in a classroom was invisible. Marketing only knew the ad had been paid for."
    ),
    delivered: c(
      "家长在官网上看课程、约试听。这个线索分给谁、约了没有、来了没有，都记着。",
      "A parent reads the course and books a trial. Who owns the lead, whether it was booked, and whether they came, is recorded."
    ),
    story: c(
      "市场可以看见：花出去的钱，换成了多少个真正坐下来的试听，而不是多少个电话号码。",
      "Marketing can see how much money became a person in a seat, not just a phone number."
    ),
    solutionEn: "A course site with trial booking, and leads handed to a named person.",
    backgroundEn: "Tutoring leads came through the site, and nobody could see who actually attended a trial.",
    metricsEn: ["From a phone number to a trial, the path is visible", "The cost of a real attendee is clearer"],
    stat: { value: c("跟得上", "Traceable"), label: c("留下电话的人，有没有来试听。", "Whether a phone number became a trial.") },
    likeYou: c("你也在投广告，但不知道留下电话的人后来来了没有。", "You buy ads too, and cannot tell who actually showed up."),
  },
  {
    id: "12",
    title: "三十多家餐厅，会员不再各店一份",
    titleEn: "Thirty restaurants, one membership",
    type: "miniprogram",
    industry: "food",
    clientBrief: "三十多家店，每家收银和会员各记各的。客人在 A 店办的卡，B 店不认。",
    solutionBrief: "小程序点餐，收银和会员打通，总部能看每家店。",
    metrics: ["客人更愿意再来", "总部不用等各店上报才知道今天卖了多少"],
    image: "/images/cases/shouyin.jpg",
    situation: c(
      "客人说「我在另一家店有会员」，这家店的系统里没有这个人。老板问今天卖了多少，要一家一家问。",
      "“I have a membership at the other branch” meant nothing here. The owner learned today’s sales by calling each shop."
    ),
    delivered: c(
      "点餐、会员在一个小程序里，三十多家店都认。总部打开就能看见各店今天的数。",
      "Ordering and membership live in one mini program, recognised at every branch. Headquarters sees each shop’s day without asking."
    ),
    story: c(
      "客人换一家店也能用原来的卡。复购不再被门店的系统切断。",
      "A regular can use the same membership in another branch. Repeat visits are no longer cut off by the till."
    ),
    solutionEn: "Ordering, a shared till, and one membership across the chain, with a head-office view.",
    backgroundEn: "30+ restaurants, each with its own till and membership list.",
    metricsEn: ["Guests come back more often", "Headquarters sees each shop without waiting for a report"],
    stat: { value: c("30+", "30+"), label: c("家店的会员和收银，收进同一个地方。", "Shops, one membership, one view.") },
    likeYou: c("你有好几家店，会员卡出了这家门就作废。", "You have several shops, and a membership dies at the door."),
  },
  {
    id: "13",
    title: "人在车间，也能把字签了",
    titleEn: "A signature from the factory floor",
    type: "app",
    industry: "enterprise",
    clientBrief: "工厂不在一处。审批要等回到办公室，产量要等工人下班再填表。",
    solutionBrief: "手机上审批，并在现场报工，报表跟着更新。",
    metrics: ["审批不用等回到办公室", "产量当天就能看见"],
    image: "/images/cases/yidongbangong.jpg",
    situation: c(
      "厂长在车间，单子在办公室。工人今天做了多少，要等表格交上来才知道，往往是第二天。",
      "The manager was on the floor and the paperwork was in an office. What was made today showed up tomorrow, on a sheet."
    ),
    delivered: c(
      "在车间用手机批。工人做完一批就报一次。当天的数，当天能看。",
      "Approvals happen on a phone in the workshop. A batch is reported when it is done. The day’s numbers are the day’s numbers."
    ),
    story: c(
      "单子不再在办公室过夜。对产量有疑问，看的是当天的记录，不是回忆。",
      "Paper stopped sleeping in the office. A question about output is answered by the day’s record, not by memory."
    ),
    solutionEn: "A mobile app for approvals and shop-floor reporting, with the report updating as work is logged.",
    backgroundEn: "Factories in several places. Approvals waited for an office, and output was filled in after the shift.",
    metricsEn: ["Approvals no longer wait for a desk", "Output is visible the same day"],
    stat: { value: c("当天", "Same day"), label: c("人在车间也能批，产量当天能看。", "Signed on the floor. Output the same day.") },
    likeYou: c("你的审批和产量，都要等回到办公室才发生。", "Your approvals and your output both wait until someone is back at a desk."),
  },
  {
    id: "14",
    title: "训练营的人，知道今天打卡了没有",
    titleEn: "A course that knows who showed up today",
    type: "miniprogram",
    industry: "education",
    clientBrief: "知识付费的训练营，拉新靠转发，谁坚持学完靠群里问。",
    solutionBrief: "小程序里上课、打卡，也可以拼团和让老学员带人。",
    metrics: ["学完的人和再买的人，数得出来", "带新学员的成本下来了"],
    image: "/images/cases/zhishifufei.jpg",
    situation: c(
      "课在群里发。谁看了、谁没看，只能问一句「打卡了吗」。想让老学员带新人，靠手工记谁该分多少。",
      "Lessons went out in a group chat. Who watched was a question: “did you check in?”. Paying referrers was a manual tally."
    ),
    delivered: c(
      "课、打卡、拼团都在小程序里。谁今天来了，打开就能看见。老学员带人，账是算好的。",
      "Lessons, check-ins, and group buys live in the mini program. Today’s attendance is a screen, not a question. Referrals are counted."
    ),
    story: c(
      "完课不再是群里的感觉。再买一次的人，和带来的新人，都能对上号。",
      "Finishing is no longer a feeling in the group chat. Repeat buyers and the people they brought can be named."
    ),
    solutionEn: "Lessons, daily check-in, and referrals inside a mini program.",
    backgroundEn: "A paid cohort grew by forwarding chats, and completion was whoever answered in the group.",
    metricsEn: ["Completion and repeat purchase can be counted", "The cost of a referred student came down"],
    stat: { value: c("打卡", "Check-in"), label: c("谁今天学了，不用在群里问。", "Who studied today, without asking the group.") },
    likeYou: c("你的课在微信群里，谁学完了你其实不知道。", "Your course lives in a group chat, and you do not really know who finished."),
  },
  {
    id: "15",
    title: "看了楼盘的人，能约到访",
    titleEn: "A property visit you can book",
    type: "website",
    industry: "enterprise",
    clientBrief: "楼盘要有官网，还要把「想来看看」的人记下来，分给销售。",
    solutionBrief: "官网介绍项目，可以留电话和预约到访，线索分给具体的人。",
    metrics: ["留下联系方式的人变多", "约了访的人，销售知道是谁"],
    image: "/images/cases/dichanqiye.jpg",
    situation: c(
      "官网像一本画册。想去看房的人不知道约谁，销售也不知道这个电话是从哪一页来的。",
      "The site was a brochure. A person who wanted to visit did not know who to ask, and sales did not know which page the number came from."
    ),
    delivered: c(
      "看完项目可以直接留电话、约到访。这个人分给哪位销售，约的是哪一天，都有记录。",
      "After reading the project, someone can leave a number and book a visit. Which salesperson, and which day, is recorded."
    ),
    story: c(
      "到访不再只靠门口的登记本。市场能看见：页面带来的人，有多少真的约了时间。",
      "Visits are no longer only a book at the gate. Marketing can see how many people from the page actually booked a time."
    ),
    solutionEn: "A project site with an enquiry and a visit booking, assigned to a salesperson.",
    backgroundEn: "A property project needed a site that could capture a visit, not only photographs.",
    metricsEn: ["More people left a way to reply", "Booked visits have a name on them"],
    stat: { value: c("约得到", "Bookable"), label: c("看了楼盘的人，能预约到访。", "A reader can book a visit.") },
    likeYou: c("你的介绍页很漂亮，但看完的人没有下一步。", "Your page is handsome, and then there is no next step."),
  },
  {
    id: "16",
    title: "到店和外卖，不再是两套账",
    titleEn: "Dine-in and delivery, one till",
    type: "miniprogram",
    industry: "food",
    clientBrief: "店不多，但外卖和到店各算各的。排队还靠在门口拿号。",
    solutionBrief: "小程序点餐和外卖，可以取号，会员券也能用。",
    metrics: ["站着等的时间短了", "客人更愿意再来"],
    image: "/images/cases/waimai.jpg",
    situation: c(
      "到店一套菜单，外卖平台另一套价。门口还有人发号。老板对账对到晚上。",
      "The room had one menu, the delivery app another price, and someone at the door handing numbers. Reconciliation went late."
    ),
    delivered: c(
      "可以在微信里点了到店取，也可以外卖。取号不用站在门口。券在同一处用。",
      "WeChat can order for pickup or delivery. A queue number does not mean standing at the door. Coupons are the same ones."
    ),
    story: c(
      "忙的时候，柜台少听一句「还要多久」。回头客用的是这家店自己的入口，不只是平台。",
      "The counter hears “how long” less often. Regulars come back through the shop’s own door, not only through an app."
    ),
    solutionEn: "Ordering for pickup and delivery, a queue number, and member coupons.",
    backgroundEn: "A small restaurant ran dine-in and delivery as two businesses, and queued people at the door.",
    metricsEn: ["Less standing around", "People come back more often"],
    stat: { value: c("少等", "Less waiting"), label: c("先在微信点，到店取，不用对着柜台喊。", "Order in WeChat. Pick up. Don’t shout at the counter.") },
    likeYou: c("你的店既做堂食又做外卖，每晚对两套账。", "You serve the room and the delivery apps, and reconcile both at night."),
  },
  {
    id: "17",
    title: "发错的货，从常有变成少有",
    titleEn: "Wrong shipments became rare",
    type: "website",
    industry: "ecommerce",
    clientBrief: "原来在亚马逊上卖，想有自己的站。订单在好几个后台，发错货不稀奇。",
    solutionBrief: "独立站，多平台订单收在一处，商品介绍可以用 AI 先起一稿。",
    metrics: ["发错货从大约 15% 降到接近没有", "履约比原来省事"],
    image: "/images/cases/kuajing.jpg",
    situation: c(
      "一个货在好几个平台卖。订单导出来对不上，大约十五单里会错一单。客服的时间耗在道歉上。",
      "One product sold on several platforms. Exported orders did not line up. About one shipment in fifteen was wrong, and support spent the day apologising."
    ),
    delivered: c(
      "自己的站也能卖。各平台的订单进同一个列表再发货。商品文案可以先由 AI 起稿，人来改。",
      "The own site sells too. Orders from the platforms land in one list before anything ships. Product copy can start as an AI draft a person edits."
    ),
    story: c(
      "发错的比例从大约 15% 降到接近没有。仓库少返工，客服少说对不起。",
      "Wrong shipments fell from about 15% to nearly none. The warehouse reworked less. Support apologised less."
    ),
    solutionEn: "An independent shop, orders from several platforms in one list, and AI first drafts for product text.",
    backgroundEn: "An Amazon seller wanted their own site, and orders across dashboards were being shipped wrong.",
    metricsEn: ["Wrong shipments fell from about 15% to nearly none", "Fulfilment took less effort"],
    stat: { value: c("≈0", "≈0"), label: c("发错货。原来大约十五单错一单。", "Wrong shipments. It used to be about one in fifteen.") },
    likeYou: c("你在好几个平台卖，最怕的是发错。", "You sell on several platforms, and the fear is shipping the wrong thing."),
  },
  {
    id: "18",
    title: "集团里的系统，登录一次就够",
    titleEn: "One sign-in for a group of companies",
    type: "website",
    industry: "enterprise",
    clientBrief: "一个集团，好几家公司，每套系统一个账号。人要记很多密码，权限也对不齐。",
    solutionBrief: "一个门户，登录一次，按权限进各个系统，并留下可查的记录。",
    metrics: ["账号和权限收成一套", "谁进过，查得到"],
    image: "/images/cases/qiyetongyi.jpg",
    situation: c(
      "财务一个账号，人事一个账号，子公司又是另一套。人离职了，不一定每个系统都关掉。",
      "Finance, HR, and each subsidiary had their own login. When someone left, not every system was closed."
    ),
    delivered: c(
      "从集团的入口登录一次。能进哪些系统，按职务来。进过哪里，可以事后查。",
      "One sign-in at the group door. Which systems open depends on the role. What was opened can be checked later."
    ),
    story: c(
      "新人不用第一周就领五六个密码。离职时关的是一处，不是靠记忆去点五个后台。",
      "A new hire does not collect five passwords in week one. Leaving closes one door, not five back offices from memory."
    ),
    solutionEn: "A group front door, one sign-in, permissions, and a record that can be audited.",
    backgroundEn: "Several companies in one group, each system with its own account.",
    metricsEn: ["Accounts and permissions are one set", "Who went where can be looked up"],
    stat: { value: c("一次", "Once"), label: c("登录一次，该进的系统都能进。", "Sign in once. The right systems open.") },
    likeYou: c("你的公司系统很多，密码本比业务还长。", "You have many systems, and the password list is longer than the work."),
  },
  {
    id: "19",
    title: "瑜伽馆的课，约得到也核得了",
    titleEn: "A studio where a class can be booked and checked in",
    type: "miniprogram",
    industry: "food",
    clientBrief: "馆里靠微信群约课。次卡卖了几节、今天谁来了，前台用本子记。",
    solutionBrief: "小程序预约和排课，次卡和储值，到店扫码核销。",
    metrics: ["约了的人更常来", "次卡还剩几节，客人自己看得懂"],
    image: "/images/cases/jianshen.jpg",
    situation: c(
      "想上课要在群里问「还有位吗」。次卡剩几节，客人和前台经常对不上。",
      "Booking meant asking the group chat if a spot remained. Remaining classes on a card rarely matched between the desk and the member."
    ),
    delivered: c(
      "看课表、预约、用次卡，都在小程序里。到店扫一下，这一节就扣掉，两边看见的是同一个数。",
      "The timetable, the booking, and the class card are in the mini program. A scan at the door deducts the class. Both sides see the same number."
    ),
    story: c(
      "前台少了一种争执。约了位的人更常出现，因为时间是自己选的，不是群里随口说的。",
      "The desk has one less argument. People who booked show up more often, because they chose the time themselves."
    ),
    solutionEn: "Booking, the timetable, class cards and stored value, and a scan at the door.",
    backgroundEn: "Classes were booked in a group chat, and remaining sessions lived in a notebook.",
    metricsEn: ["Booked people show up more often", "Remaining classes are readable by the member"],
    stat: { value: c("对得上", "It matches"), label: c("次卡还剩几节，不用和前台争。", "Remaining classes match. No argument at the desk.") },
    likeYou: c("你的预约在微信群里，次卡在一个本子上。", "Your bookings are in a group chat and the class card is a notebook."),
  },
  {
    id: "20",
    title: "半夜也有人回答「怎么退货」",
    titleEn: "“How do I return this?” has an answer at night",
    type: "ai",
    industry: "ecommerce",
    clientBrief: "客服白天答不过来，夜里也有人问发货和退货。很多问题其实是同一句。",
    solutionBrief: "把常见问题和资料接上大模型，答得了就答，答不了转人工。",
    metrics: ["重复问题更多由系统先答", "人工只处理没见过的"],
    image: "/images/cases/aiyuzhineng.jpg",
    situation: c(
      "「什么时候发货」「怎么退」，一天要答很多遍。夜里没有人，客人就等着，或者去投诉。",
      "“When does it ship?” and “how do I return it?” were answered all day. At night nobody was there, so people waited or complained."
    ),
    delivered: c(
      "常见问题夜里也有回答，依据是这家店自己的资料，不是随便编。遇上看不准的，转给人工，并带上已经问过的话。",
      "Common questions are answered at night from the shop’s own material, not invented. Uncertain ones go to a person, with the conversation attached."
    ),
    story: c(
      "客服上班后看到的，是没答干净的那一部分，而不是从零开始的一百句重复。",
      "When staff start the day, they see what was not resolved, not a hundred copies of the same question."
    ),
    solutionEn: "A model grounded in the shop’s own answers, with a handoff to a person when it should not guess.",
    backgroundEn: "Support could not keep up in the day, and nights had the same shipping and return questions.",
    metricsEn: ["More repeat questions are answered first by the system", "People handle what the system has not seen"],
    stat: { value: c("夜里", "At night"), label: c("常见问题也有回答，难的再转人工。", "Common questions are answered at night. Hard ones reach a person.") },
    likeYou: c("你的客服每天在答同一句话。", "Your support team answers the same sentence every day."),
  },
  {
    id: "21",
    title: "客户搜问题，能自己找到答案",
    titleEn: "Customers can find the answer themselves",
    type: "website",
    industry: "enterprise",
    clientBrief: "软件公司的官网讲不清产品，说明文档散落着，客户一有问题就问销售。",
    solutionBrief: "官网把产品讲清楚，文档放在一处，搜索能找到。",
    metrics: ["从搜索来的人变多", "文档被打开的次数上来了"],
    image: "/images/cases/saas.jpg",
    situation: c(
      "客户想知道一个按钮在哪，只能问销售。销售再去问同事。文档有，但找不到。",
      "A customer who could not find a button asked sales. Sales asked a colleague. The document existed. Nobody could find it."
    ),
    delivered: c(
      "官网讲产品做什么。帮助文档能搜。常见问题客户自己打开，销售少当一遍传话。",
      "The site says what the product does. Help can be searched. Common questions are opened by the customer. Sales repeat themselves less."
    ),
    story: c(
      "搜到文档的人变多。销售的时间更多用在真的要谈的单上。",
      "More people reach a document from search. Sales time goes to conversations that actually need a person."
    ),
    solutionEn: "A product site plus a help centre that search engines and customers can open.",
    backgroundEn: "The product site was vague, docs were scattered, and every question landed on sales.",
    metricsEn: ["More visits arrive from search", "The docs are opened more often"],
    stat: { value: c("搜得到", "Findable"), label: c("客户自己打开文档，不用先问销售。", "Customers open the doc before they ask sales.") },
    likeYou: c("你的客户有问题，第一反应是找销售，而不是找文档。", "When your customer is stuck, they call sales, because the docs cannot be found."),
  },
  {
    id: "22",
    title: "多家店的单，月底不用对表",
    titleEn: "Many local shops, no month-end spreadsheet",
    type: "miniprogram",
    industry: "food",
    clientBrief: "本地生活，很多商家要进来卖。订单、核销、该结多少钱，靠表。",
    solutionBrief: "商家可以入驻，订单和核销在系统里，结算按规则算。",
    metrics: ["商家和订单都在涨", "核销和该结的钱，不用月底对 Excel"],
    image: "/images/cases/shenghuo.jpg",
    situation: c(
      "商家把券卖出去，客人到店，老板在群里说一声「用了」。月底谁该拿多少钱，要拉一张大表。",
      "A voucher was sold, used in store, and confirmed with a chat message. Who was owed what at month-end was a large spreadsheet."
    ),
    delivered: c(
      "商家自己入驻、上服务。客人下单，到店核销。该结算的金额按说好的规则出来，不用重新加总。",
      "Merchants list their own services. Customers order and redeem in store. The amount to settle follows the agreed rule, without a fresh tally."
    ),
    story: c(
      "月底少一次通宵对账。平台看得到哪家店的券真的被用了。",
      "Month-end is no longer an all-nighter. The platform can see which shop’s vouchers were actually used."
    ),
    solutionEn: "Merchants join, orders and redemption are in the system, and settlement follows a rule.",
    backgroundEn: "A local-services marketplace tracked orders, redemption, and payouts in spreadsheets.",
    metricsEn: ["More merchants and more orders", "Redemption and settlement no longer wait for a spreadsheet"],
    stat: { value: c("不用对表", "No spreadsheet"), label: c("核销和该结的钱，系统按规则算。", "Redemption and payouts follow a rule, not a spreadsheet.") },
    likeYou: c("你这边有很多商家，月底最怕对账。", "You have many merchants, and month-end reconciliation is the thing you dread."),
  },
];

export function caseTitle(item: CaseItem, locale: "zh" | "en") {
  return locale === "en" ? item.titleEn : item.title;
}

export function caseById(id: string) {
  return CASES_LIST.find((item) => item.id === id);
}
