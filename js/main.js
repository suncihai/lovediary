$(document).ready(function($) {

    var postArray = $.makeArray();
    var container=document.getElementById("container");

    var items=[
    {
        "item_id": "1",
        "item_data": {
            "post_date":"4月13日",
            "title":"开始",
            "text": "今天是又是一个星期天，中午和两个好基友出去吃了个饭。基友说他在加州有个朋友提起有个女生 挺好的，你想不想认识一下呀？我说好啊，先认识一下了解了解挺好的呀，然后基友就去问他的朋 友要了那个女生的名片发给了我，我满心期待地就加了~",
            "image_url": "images/01.jpg"
        },
        "item_created": "2017-04-13 11:50:14",
    },
    {
        "item_id": "2",
        "item_data": {
            "post_date":"4月14日",
            "title":"感兴趣",
            "text": "微信加好了，然后我就很呆头呆脑地直接自报姓名，她也告诉我了她的名字，叫宝宝。嗯，很好听的名字。",
            "image_url": "images/02.jpg"
        },
        "item_created": "2017-04-14 11:50:14",
    },
    {
        "item_id": "3",
        "item_data": {
            "post_date":"4月15日",
            "title":"闲聊",
            "text": "好像她刚回国了，是因为要处理一些事情，所以和她聊天有时差。不过还是挺有意思的女孩，她说以前好喜欢动漫的类，还幻想过做动漫。我在想以后如果有机会的话，要不做个小动漫给她呢？哈哈。",
            "image_url": "images/03.jpg"
        },
        "item_created": "2017-04-15 11:50:14",
    },
    {
        "item_id": "4",
        "item_data": {
            "post_date":"4月16日",
            "title":"杂谈",
            "text": "她说她在家里的小工厂里帮下忙，反正挺忙的，我也不懂那方面的东西，也给不了啥合适的建议，只能说好辛苦啊balabala的。她说好喜欢吃寿司啊，在加州一直会吃寿司。",
            "image_url": "images/04.jpg"
        },
        "item_created": "2017-04-16 11:50:14",
    },
    {
        "item_id": "5",
        "item_data": {
            "post_date":"4月17日",
            "title":"唠嗑",
            "text": "她说到了表姐和她是一对欢喜冤家，经常打打闹闹的，唉，我也想到我的表姐了，也好长时间没回国了呢。",
            "image_url": "images/05.jpg"
        },
        "item_created": "2017-04-17 11:50:14",
    },
    {
        "item_id": "6",
        "item_data": {
            "post_date":"4月18日",
            "title":"说说家常",
            "text": "说过了表姐，她又谈到了小姨，好像她小学开始就去北京了，北京我就去过两三次呢。搭不上啥话题，好揪心啊。除了雾霾我憋不出啥东东了，于是她给我起了一个绰号叫闷葫芦，这是啥啊。。。",
            "image_url": "images/06.jpg"
        },
        "item_created": "2017-04-18 11:50:14",
    },
    {
        "item_id": "7",
        "item_data": {
            "post_date":"4月19日",
            "title":"工作繁忙",
            "text": "今天地铁居然崩溃了，oh my god，她好像也挺关心我的，我到公司都快10点了，她还发消息问我咋样。真的有点小感动啊啊啊啊",
            "image_url": "images/07.jpg"
        },
        "item_created": "2017-04-19 11:50:14",
    },
    {
        "item_id": "8",
        "item_data": {
            "post_date":"4月20日",
            "title":"辛苦地工作",
            "text": "今天听她语音好像挺疲惫的，貌似她叫她表弟帮她捶背了，好像她表弟也挺听话的，她说她很宠她表弟的，唉，我就没人宠",
            "image_url": "images/08.jpg"
        },
        "item_created": "2017-04-20 11:50:14",
    },
    {
        "item_id": "9",
        "item_data": {
            "post_date":"4月21日",
            "title":"回忆往昔",
            "text": "她开始提到了她前任，一个渣男，唉，这么好的妹子，还好分了。后来才说其实大学时也谈过一个，哎，我一对比好单纯，感觉她像是老司机。",
            "image_url": "images/09.jpg"
        },
        "item_created": "2017-04-21 11:50:14",
    },
    {
        "item_id": "10",
        "item_data": {
            "post_date":"4月22日",
            "title":"尴尬",
            "text": "我们逐渐地熟络了起来，我好像在她面前不再是闷葫芦了，看来挺有缘分的。不过我今天问了一个很傻的问题，唉，都不想说了，都不好意思",
            "image_url": "images/10.jpg"
        },
        "item_created": "2017-04-22 11:50:14",
    },
    {
        "item_id": "11",
        "item_data": {
            "post_date":"4月23日",
            "title":"乡音",
            "text": "听到她说家乡话了，听不懂，555。不过反正听她声音挺甜的，那就可以了，哇哈哈。",
            "image_url": "images/11.jpg"
        },
        "item_created": "2017-04-23 11:50:14",
    },
    {
        "item_id": "12",
        "item_data": {
            "post_date":"4月25日",
            "title":"坐高铁",
            "text": "她今天要和她妈妈一起坐高铁，在路上的车上因为和妈咪和司机在一起，还不好意思语音，挺可爱的。然后听她说好像在高铁里她和妈妈谈到了我？啥情况啊。",
            "image_url": "images/12.jpg"
        },
        "item_created": "2017-04-25 11:50:14",
    },
    {
        "item_id": "13",
        "item_data": {
            "post_date":"4月27日",
            "title":"意外",
            "text": "她们工厂里一个工人被冲走了，好烦心。怎么会有这种事呢。。",
            "image_url": "images/13.jpg"
        },
        "item_created": "2017-04-27 11:50:14",
    },
    {
        "item_id": "14",
        "item_data": {
            "post_date":"4月28日",
            "title":"平息",
            "text": "家属来闹，她说她作为领导，一定要顶在员工前面，然而我却说不要冲在太前面，唉，我的思想觉悟真是自愧不如。好佩服她啊。",
            "image_url": "images/14.jpg"
        },
        "item_created": "2017-04-28 11:50:14",
    },
    {
        "item_id": "15",
        "item_data": {
            "post_date":"5月1日",
            "title":"逐渐习惯",
            "text": "已经没有听她的语音睡不着觉了，这就是习惯的力量吗，那她也应该一样吧？不过好像和她聊天总是聊不完的，仔细一想都是她带着我聊，真相帝了。",
            "image_url": "images/15.jpg"
        },
        "item_created": "2017-05-01 11:50:14",
    },
    {
        "item_id": "16",
        "item_data": {
            "post_date":"5月2日",
            "title":"老爸生日",
            "text": "明天就是爸爸生日了，下班时再去蛋糕店买蛋糕，8点关门，地铁居然还堵塞，赶在7点57分到了，买到了蛋糕，晚上她说想看蛋糕照片，我就发了爸爸的照片，因为没有单独拍蛋糕的照片，然后她又问我要照片了，我又乖乖地发给她三张照片，她说给她妈咪看了。觉得还挺好的？就在这天晚上，我们不知不觉中稀里糊涂地确定了关系，终于不再是单身狗啦~",
            "image_url": "images/16.jpg"
        },
        "item_created": "2017-05-02 11:50:14",
    },
    {
        "item_id": "17",
        "item_data": {
            "post_date":"5月3日",
            "title":"梦中的奶奶",
            "text": "一早老妈说她做梦梦到奶奶了，奶奶依旧穿了那件绿色羊绒衣，很慈祥地看着她笑，我一听心里就有数了，看来是奶奶知道我找到女朋友了啊，想到奶奶就心酸。。忍住。。晚上她的消息好冷淡，然后语音里说，辞海要不你在纽约找一个吧。我当时就呆掉了，然后眼泪就控制不住地留下来了，为什么啊。。为什么啊。。有什么理由吗？后来好像她又收回这话了，但是我还是心好痛啊。。我讨厌这种对面话筒里一点都没声音，紧张到窒息的感觉，再来几次我要折寿的。。",
            "image_url": "images/17.jpg"
        },
        "item_created": "2017-05-03 11:50:14",
    },
    {
        "item_id": "18",
        "item_data": {
            "post_date":"5月4日",
            "title":"害怕失去",
            "text": "和她聊了好久好久，这次真的好久好久，我坚持到了三点多，不行了，不听她的声音已经不能睡觉了。万一以后她不要了怎么办呢？我好怕",
            "image_url": "images/18.jpg"
        },
        "item_created": "2017-05-04 11:50:14",
    },
    {
        "item_id": "19",
        "item_data": {
            "post_date":"5月5日",
            "title":"生理小白",
            "text": "聊到了生理问题，她又是一个小白，一点不懂，我又给她科普了一下，结果说她想要三个娃，我说我无所谓的，但是女的生孩子好痛好痛的，相当于十根肋骨一起断掉的疼，听完她默默地不做声了，突然来了一句那你来生好了。可惜现代技术没法实现生，不然一起生也是挺好的",
            "image_url": "images/19.jpg"
        },
        "item_created": "2017-05-05 11:50:14",
    },
    {
        "item_id": "20",
        "item_data": {
            "post_date":"5月6日",
            "title":"家庭伦理",
            "text": "她又聊到了以前的情感经历，我说如果我是女的话，一定不能找有家庭暴力的，打人太可怕了，就像是在和一颗定时炸弹生活。她说是啊然后又夸了我一番。她在开车前电话里亲了我一口，我心酥酥的，好痒",
            "image_url": "images/20.jpg"
        },
        "item_created": "2017-05-06 11:50:14",
    },
    {
        "item_id": "21",
        "item_data": {
            "post_date":"5月7日",
            "title":"小误会",
            "text": "她朋友圈里说真的爱上了，我感动地一塌糊涂，她若不离不弃，我必生死相依，不然还咋办呢，这孩子没人照顾真放心不下，还老是胃疼，都五六天了还在拖。晚上我打算做日记了，在写代码时精力集中在思考上，一个不小心说了好几次一般被误会了，跳进黄河也洗不清了，555",
            "image_url": "images/21.jpg"
        },
        "item_created": "2017-05-07 11:50:14",
    },
    {
        "item_id": "22",
        "item_data": {
            "post_date":"5月8日",
            "title":"喜欢就是喜欢",
            "text": "宝宝晚上发了好多好多语音和很长串的消息，我看得好晕啊。昨天晚上睡得挺晚的，上班很难集中精力。宝宝说昨天遇到的律师挺好的，让人挺心疼的，还是从小有爸妈宠的孩子好幸福啊。宝宝也挺幸福的，我遇到宝宝也挺幸福的呢。其实是有点吃醋的，不过后来转念一想其实没关系啊。把宝宝宠到其他男人受不了了不就行啦~这样其他男人看到宝宝都怕怕了也~开玩笑的啦。其实我必须要对宝宝越来越好，因为宝宝单身的时候有好多人追，但是宝宝不单身的话就没人追的，她要失落的。</br>\
                   </br>宝宝有问起为什么我相亲这么多次都怎么成功，其实我有成功过啊。而且次数其实也不算多吧，宝宝说我条件其实不错啊，放低要求其实可以找到女朋友的呀，后来还怀疑我是不是喜欢男的了，啊啊啊好憋屈啊，相亲这种其实对于我这种一面定胜负的人来说真的挺吃亏的呢。宝宝还不断地诱惑我去她那里，说只要去，亲哪里都可以的。宝宝真的是太会撩人了，直弄得我心痒痒，呜呜呜。</br></br>\
                   其实对宝宝一句话很感动很感动的，宝宝说很后悔没有在她最好的时候遇见我，我看到当时就有点想哭。都已经这么托付给我了，我不努力怎么行呢，要开始培养对家庭的责任感了，嗯嗯。",
            "image_url": "images/22.jpg"
        },
        "item_created": "2017-05-08 11:50:14",
    },
    {
        "item_id": "23",
        "item_data": {
            "post_date":"5月9日",
            "title":"爱上",
            "text": "昨天被宝宝揶揄了一下名牌大学生的写作水平好烂，内心还是挺郁闷的。看来赶工的确是豆腐渣工程的确不假。今天宝宝好像挺忙的，听语气能感觉得到正在承受着工作上的压力，但宝宝还是坚持找情侣头像，真的让我很感动。</br>\
                   </br>（切换成正式写作模式）也不知道什么时候开始，渐渐地这个女孩的心情开始牵动了我的心绪。每天听电话那端她的一颦一笑，已成为了我生活中必不可少的一部分。真的已经很久没有体验到聊得开心的幸福感了。遇到了对的人，不管她说什么，你听起来都是银铃缭绕。即使相隔万里，也能感受到彼此真实的心意，真的是一件无比幸运的事情。有朋友会问你不担心吗？我听了会嘴角微微一扬，笑而不语，也许这就是心照不宣的爱情吧。</br></br>\
                   思绪回到了自己当年给自己起的昵称上，因为一直觉得自己的性格挺像张无忌，就起了无忌这个名字，从高中用到现在，伴我度过了青春年华。这也是为什么潜意识中会喜欢性格像赵敏这类活泼开朗，敢爱敢恨的女孩子吧，所以一直梦想着能有一个赵敏那样的女孩能伴我走完一生。如今这个人已经出现了，那我怎么能轻易放手呢~ 忽然间想起了张无忌被周芷若拿剑逼问时的那句台词：</br></br>\
                   因为我们是刻苦铭心地相爱啊。",
            "image_url": "images/23.jpg"
        },
        "item_created": "2017-05-09 11:50:14",
    },
    {
        "item_id": "24",
        "item_data": {
            "post_date":"5月10日",
            "title":"甜蜜",
            "text": "今天和宝宝商量了下想在七月份去宝宝那里玩，见下宝宝的爸爸妈妈，然后再一起去日本玩。宝宝一听觉得是挺好的计划，说让我睡沙发，哈哈。我就开始查日本签证怎么办理了，好像挺复杂的，要准备七样材料，其中一个是机票订单，所以看来要先确定下时间才行啦。宝宝因为最近工厂里的事情工作压力也很大，我这里白天太忙没有来得及在宝宝最低落的时候安慰宝宝，让宝宝挺伤心的，我感到很愧疚。。我以后真的要好好学学怎么样在最好的时机去安慰宝宝，不然宝宝一不高兴就要虐我了呢。</br>\
                   </br>当然今天最最最开心和感动的就是宝宝为我摆的爱心花盆，还是宝宝亲自摆的，自从上次从以前的公司离开后同事们为我准备的礼物以来，再也没有过收到这样充满心意的礼物了，宝宝我真的好爱好爱你。我要以身相许（害羞状）</p>",
            "image_url": "images/24.jpg"
        },
        "item_created": "2017-05-10 11:50:14",
    },
    {
        "item_id": "25",
        "item_data": {
            "post_date":"5月11日",
            "title":"缘分",
            "text": "今天和宝宝聊得很开心~在聊到几个问题的时候，我的那些第一反应的回答，让宝宝心疼我的耿直。不过确实我在遇到问题的时候的第一反应是直接反应自己的内心世界而不是会经过思考去过加工成听起来舒服的话，最后都让宝宝听的笑得眼泪都出来了。可能这也是宝宝最喜欢我的点吧。今天也是第一次看到了宝宝的妈妈的照片，果然和想象中差不多很慈祥的阿姨，因为一直听宝宝说宝宝妈咪关照宝宝对我好一点，所以还觉得很亲切的。宝宝说她爸爸很帅的，其实我爸爸也很帅的呢~宝宝也看到过我爸爸的照片的。一会儿找下我妈咪的照片给宝宝看一下~</br>\
                   </br>宝宝后来一直问我生日是不是真的是518，因为宝宝家里好多亲戚车牌尾号都是518，所以还真的觉得这是上天冥冥之中的安排吧。今天才想起问宝宝的生日也是我的不对，唉，我也真是迟钝呢，自己心爱的女生的生日这么晚才想起来问。宝宝生日是8月8日，我又是5月18日，真的是好配对啊。宝宝内心里还是很想找一个能够在她压力山大的时候能给他安心感的男人的，我真的要好好努力了呢，为了成为宝宝心中最佳的那个他！",
            "image_url": "images/25.jpg"
        },
        "item_created": "2017-05-11 11:50:14",
    },
    {
        "item_id": "26",
        "item_data": {
            "post_date":"5月12日",
            "title":"每天都是情人节",
            "text": "当一个人恋爱的时候，每天的心情会特别特别好，无论什么时候都会想着她在干嘛，她起床了吗？她吃饭了吗？她今天工作顺利吗？心情好嘛？想着想着，就特别特别想听声音。</br>\
                   </br>现在的我，完全就是这个状态。 </br></br>今天终于趁老板心情好的时候，把握住了机会，提起了7月初请假的请求。老板刚开始是很不情愿的，不过知道了我在国内有个可爱的女朋友在等我回国团聚后，他也被我这种伟大的爱给折服了，答应了假期，还祝我幸福呢，哈哈。于是我一下班就立马打电话给宝宝告诉了喜讯。宝宝立马夸奖了乖乖机智灵敏。一回到家，我便马上搜了下机票，一看6月30日是周五，就立马二话不说地订好了。宝宝说这样的男的很少，真的吗？</br></br>\
                   宝宝今天陪爹地妈咪去了医院做体检。宝宝妈妈最近一直在忙，所以有些身体不适，需要住在医院里静养五六天。宝宝这几天就变身为贴身小棉袄在妈妈身边服侍着，喂妈咪吃粥，宝宝的爸爸在一旁和他们聊天开玩笑。虽然没有看到他们，但我已经在脑海里浮现出宝宝一家温馨的画面，放佛看到了几年后宝宝和我和孩子们的样子，突然就感到幸福感爆棚的感觉，真的。 </br></br>\
                   一想到余生和宝宝度过，就觉得余生充满了希望。",
            "image_url": "images/26.jpg"
        },
        "item_created": "2017-05-12 11:50:14",
    },
    {
        "item_id": "27",
        "item_data": {
            "post_date":"5月13日",
            "title":"生娃的畅想",
            "text": "现在的每一天的一早醒来的时候，感觉空气里都洋溢着幸福。每次看到宝宝的消息，都舍不得关掉，再往上面拖着看。宝宝今天又发了好多好多表情包，以后我要抽空做一个宝宝和我专属的表情包，嗯嗯~</br></br>\
                   早上看到腾讯新闻里有关于母亲节男士去体验生孩子测痛仪的新闻，我以前看到过类似的，但是都也只是看看而过，这次看到这个新闻，联想到宝宝以后要这么这么痛，这种联想让我突然一种心疼到死的感觉，宝宝从来没有吃过苦，不想让宝宝承受这样的痛，还是剖腹产比较适合宝宝吧。。 </br></br>\
                   宝宝今天还要陪妈妈动个小手术，早上和宝宝聊天时宝宝说想眯一会儿，看来是真的很辛苦呢，心疼宝宝啊。",
            "image_url": "images/27.jpg"
        },
        "item_created": "2017-05-13 11:50:14",
    },
    {
        "item_id": "28",
        "item_data": {
            "post_date":"5月14日",
            "title":"泪流满面",
            "text": "今天宝宝哭了。这是我第一次听到宝宝哭，也是我第一次觉得自己好没用，居然在自己心爱的女人哭的时候不在她身边抱着她安慰她，至少能让宝宝体会到我存在的温暖。我真心希望能和宝宝通过自己的努力来建立我们温馨的小家和美好的未来。希望今晚能进入宝宝的梦乡和宝宝遇到在安慰她吧，嗯嗯。",
            "image_url": "images/28.jpg"
        },
        "item_created": "2017-05-14 11:50:14",
    },
    {
        "item_id": "29",
        "item_data": {
            "post_date":"5月17日",
            "title":"化险为夷",
            "text": "前两天真的是我和宝宝认识以来最危机的时刻。这其中的缘由只是因为一个误解，不过在关键时刻，宝宝的挺身而出，从容地化解了这场危机，也让乖乖的爸妈刮目相看。因此我对宝宝的敬仰之情，噢不，思念之情也越来越深，让我越来越不可自拔。也越来越心疼宝宝，工作这么忙还要抽空对应这件事情，而且还是在受到委屈的状态下还能应对自如。嗯嗯，真的是觉得有宝宝在真好，我爱宝宝~</br></br>\
                     早上在地铁上为了宝宝做了一首藏字诗，宝宝很喜欢也很感动，看来我一些隐藏的小技能还是要等待宝宝来发掘呢，哈哈哈~~当宝宝对我说生日快乐的时候，那一刻真的好开心好开心~~收到自己最爱的女人的祝福，我太幸福啦~~~",
            "image_url": "images/29.jpg"
        },
        "item_created": "2017-05-17 11:50:14",
    },
    {
        "item_id": "30",
        "item_data": {
            "post_date":"5月18日",
            "title":"我的生日我做主",
            "text": "今天终于是生日啦，31岁了耶，今年的生日终于听到心爱的人祝福自己生日快乐啦~宝宝今天好像很忙，但还是抽时间做了一个小网页程序，看着才华横溢的宝宝充满爱意的作品，心里真的像吃了蜜一样甜~~</br></br>\
                    所以，想来想去，今天生日还是要给宝宝一点福利哒~~嗯嗯，那是什么福利呢？嘻嘻嘻~",
            "image_url": "images/30.jpg"
        },
        "item_created": "2017-05-18 11:50:14",
    },
    {
        "item_id": "31",
        "item_data": {
            "post_date":"5月20日",
            "title":"吃鱼",
            "text": "今天和宝宝聊了好多属于我们俩个之间的暗语，小蜜蜂啊，吃黄鱼啊之类的，还真的是挺有情趣的，一想到宝宝可爱地说出这些话，就觉得好幸福啊~宝宝的520贺卡也真的稳稳地戳中了我的泪点，宝宝的文笔比乖乖日记水平高太多了，乖乖感到好惭愧啊。想了一下，最近好久没有做过让宝宝感动的事情了，反而是宝宝一直在感动着乖乖，乖乖在想着以后在和宝宝生活相处中凭借着细节来感动宝宝吧。宝宝，我爱你~~（打这句话的时候，突然想起了宝宝以前在电话里柔情似水般的那句：辞海，我爱你。）",
            "image_url": "images/31.jpg"
        },
        "item_created": "2017-05-20 11:50:14",
    },
    {
        "item_id": "32",
        "item_data": {
            "post_date":"5月22日",
            "title":"期待",
            "text": "听宝宝说宝宝开始转运了，可能乖乖是宝宝的幸运星吧~今天就一直在和宝宝讨论去日本旅游的事情，我们很麻利地订好了行程和安排。宝宝说她很想尝试日本的民宿，然后就推荐了我airbnb，我用了下感觉很好的，看来这次宝宝也是很给力啊~~最近要开始看日本攻略啦~~对啦不要忘记去办日本签证哇~",
            "image_url": "images/32.jpg"
        },
        "item_created": "2017-05-22 11:50:14",
    },
    {
        "item_id": "33",
        "item_data": {
            "post_date":"7月1日",
            "title":"初见",
            "text": "在纽约飞往广州的飞机上，我整整15小时都没有合过眼，内心充满着和宝宝见面时的激动和紧张。总共看了7部电影，时间过得挺快的呢。下午2点多到了广州，通过中国海关的那一霎那，想到时隔四年第一次回国，还是有些小激动的呢。在广州机场等了五个多小时后，我又坐上了飞往贵阳的飞机，看着飞机行程盘上逐渐靠近贵阳，我内心越来越激动个，终于能见到宝宝了呢。<br/<br/>\
                    刚走出了接机口，我就看到了宝宝站在那里看着我，乍一看很乖巧玲珑的女生，我在广州机场和宝宝电话时宝宝说画了眼妆感觉不舒服就卸掉了。我顿时我女朋友真的好漂亮，真的好幸福好幸福。于是我在那里呆呆地停顿了一下，还是宝宝先走上前来的，说没来得及买花，我说没啥啊，宝宝这么晚来接机真的好辛苦啊。然后还是宝宝顺势拉了一下我的手，我才不害羞地拉住了宝宝的小手\
                    ，宝宝的手很小但拉着觉得很温暖的呢。<br/><br/>宝宝大概是比较累吧，我们在停车场转了好久才找到了宝宝的车，宝宝喜欢敞篷车，那天晚上天气挺好的，于是我们就开了敞篷直接就开回了酒店。<br/><br/>酒店里，我和宝宝互相肩靠着肩，感叹此时一刻是那么的真实，多么珍贵，于是我们一起度过了这难忘的一晚",
            "image_url": "images/33.jpg"
        },
        "item_created": "2017-07-01 11:50:14",
    },
    {
        "item_id": "34",
        "item_data": {
            "post_date":"7月2日",
            "title":"朋友聚餐",
            "text": "早上起来宝宝就嘲笑了我宾馆牙膏不知道怎么挤，我自己也觉得挺不好意思的呢。然后一起开车回到了宝宝的家，见到了阿姨和表舅，都很和蔼可亲的。之后和宝宝的闺蜜欢欢和她老公特帅一起约了吃辣子鸡。一路上宝宝一直都在说那家饭馆是最正宗的辣子鸡，其它地方都吃不到的呢，搞得我好馋好馋。刚停完车，宝宝看到路边在卖盐鹌鹑蛋，想着阿姨挺喜欢吃的，就买了一盒。宝宝真孝顺，哈哈哈\
                    <br/><br/>到了饭馆，我们几个坐下后寒暄了几句，辣子鸡上来后我吃了几块果然好辣好辣，我喝了整整一瓶矿泉水才消了下辣味，不过还真的是很好吃哒~之后和特帅在饭馆门口稍微聊了一会儿，大家都挺不容易的呢",
            "image_url": "images/34.jpg"
        },
        "item_created": "2017-07-02 11:50:14",
    },
    {
        "item_id": "35",
        "item_data": {
            "post_date":"7月3日",
            "title":"第一次合照",
            "text": "在贵阳繁华的路边街头，我们完成了第一张合照“我们”，我在发朋友圈前和宝宝打赌一定会有超过150个人点赞的，宝宝还一脸不屑地说不会的，结果过了一会儿刷刷刷刷点赞的人就上去了，哈哈哈",
            "image_url": "images/35.jpg"
        },
        "item_created": "2017-07-03 11:50:14",
    },
    {
        "item_id": "36",
        "item_data": {
            "post_date":"7月4日",
            "title":"回乡",
            "text": "这天按照计划我们踏上了回松桃的路上，一路上宝宝都在开车，我在旁边紧紧地握住宝宝的手，那种感觉真的很温暖的，不想失去。到了松桃后也见到了叔叔和舅舅大姨妈他们，一起吃了一个便饭，还见到了宝宝一直提起的表弟付豪，皮肤黑幽幽的很健壮的男孩子，哈哈哈",
            "image_url": "images/36.jpg"
        },
        "item_created": "2017-07-04 11:50:14",
    },
    {
        "item_id": "37",
        "item_data": {
            "post_date":"7月5日",
            "title":"美美地吃鱼",
            "text": "这几天都在美美地吃鱼~~~",
            "image_url": "images/37.jpg"
        },
        "item_created": "2017-07-05 11:50:14",
    },
    {
        "item_id": "38",
        "item_data": {
            "post_date":"7月6日",
            "title":"享受地吃鱼",
            "text": "这几天都在美美地吃鱼~~~好好吃啊",
            "image_url": "images/38.jpg"
        },
        "item_created": "2017-07-06 11:50:14",
    },
    {
        "item_id": "39",
        "item_data": {
            "post_date":"7月7日",
            "title":"沉醉地吃鱼",
            "text": "这几天都在美美地吃鱼~~~好好吃啊，今天宝宝带我去了铜仁，在地下停车场有了一段很美好的回忆呢，哈哈。然后又去吃了自助，螃蟹好大好大，宝宝很喜欢吃的呢。宝宝见我的螃蟹一直没吃，就满心欢喜地抓过去吃了，真是小馋猫，哈哈。晚上从酒店走出来的时候，宝宝说穿\
                     高跟鞋脚疼，我二话不说就把宝宝背了起来。背着宝宝走的感觉也挺好的，就是有点沉，啊哈哈。看来是我锻炼不够呢，回美国后真的要锻炼了哎",
            "image_url": "images/39.jpg"
        },
        "item_created": "2017-07-07 11:50:14",
    },
    {
        "item_id": "40",
        "item_data": {
            "post_date":"7月8日",
            "title":"家族聚会",
            "text": "吃了好几天鱼，今天晚上要和宝宝的亲戚们一起聚餐。在到饭馆门口前，宝宝和付豪和我买了鲜榨的果汁，我喝西瓜汁是为了压压惊，缓解一下紧张的情绪。付豪笑着说哥哥没事的。饭桌上见了很多亲戚们，表舅表嫂大姨妈二姨妈这些以及他们的小辈们。吃得还是挺开心的，饭后\
                    宝宝和我和叔叔一起散步回叔叔的办公室，聊了一会儿后，我和宝宝再一起慢慢地走回了家。路上经过了一家水果店宝宝还买了点苹果，在走进家门的一刻，我们都觉得挺温馨的，有回家的感觉。但是一想到明天就要离开了，心中充满着万分不舍。",
            "image_url": "images/40.jpg"
        },
        "item_created": "2017-07-08 11:50:14",
    },
    {
        "item_id": "41",
        "item_data": {
            "post_date":"7月9日",
            "title":"短暂的离别",
            "text": "一大早睁开眼睛，吃了一会儿鱼，和宝宝一起吃了粉，在车上我们便留下了第二次合照，宝宝和我摆了好几个pose，拍得很开心~在去机场的路上，我们都紧紧地把手握在一起，因为知道马上就要分开了，内心有诸多的不舍和无奈。在贵阳的机场，和宝宝第一次吃了肯德基，看着\
                     宝宝喂我吃鸡米花，我眼睛不由得湿润了。在宝宝送我入安检口那一刻，我控制不住了，泪水一直哗哗地留下来了。真得很舍不得和宝宝分开。在飞机上，旁边的大爷看我一直流泪，关心地问我怎么了，我说，是刚和女朋友分别。老大爷安慰说，噢没关系啊，只是短暂的离别嘛。<br/><br/>\
                     嗯，对呢，是短暂的离别。",
            "image_url": "images/41.jpg"
        },
        "item_created": "2017-07-09 11:50:14",
    }
    ];

    var post_length = items.length

    function loadData(){
        var index=0;
        while(index<post_length){
           var obj = new Object();
           
           obj.date = items[index]["item_data"]["post_date"];
           obj.title = items[index]["item_data"]["title"];
           obj.text = items[index]["item_data"]["text"];
           obj.image= items[index]["item_data"]["image_url"];
           obj.posted=items[index]["item_created"];

           postArray.push(obj);
           index++;
        }
    };
        
    loadData();

    postArray.sort(function(a,b){
        return getDateNum(a.posted) - getDateNum(b.posted);
    })

    //converse the item_published form to comparable form
    function getDateNum(date){
       var tmp = date.split("");
       var arr = new Array();

       tmp.forEach(function(element){
          if(!isNaN(element)&&element!==" "){
             arr.push(element);
          }
       });

       return arr.join("");
    }
     
    //load posts
    for(var i=0;i<post_length;i++){
        generatepost(i);
    }
    
    //generate the post box
    function generatepost(i){
        var newpostdiv = document.createElement('div');
        newpostdiv.setAttribute("class","item");

        var newatag = document.createElement('a');
        newatag.setAttribute("class","example-image-link");
        newatag.setAttribute("href",postArray[i].image);
        newatag.setAttribute("data-lightbox","example-set");
        newatag.setAttribute("data-title","点击箭头切换图片");
 
        var newimg = document.createElement('img');
        newimg.setAttribute("class","example-image");
        newimg.setAttribute("src",postArray[i].image);

        var newdiv = document.createElement('div');
        newdiv.setAttribute("class","content-item");

        var newh3 = document.createElement('h3');
        newh3.setAttribute("class","title-item");
 
        var newatag1 = document.createElement('a');
        newatag1.setAttribute("href",'');
        newatag1.innerHTML=postArray[i].title;

        var newdiv2 = document.createElement('div');
        newdiv2.setAttribute("class","time");
        newdiv2.innerHTML=postArray[i].date;

        var newtext = document.createElement('p');
        newtext.innerHTML=postArray[i].text;

        container.appendChild(newpostdiv);
        newpostdiv.appendChild(newatag);
        newatag.appendChild(newimg);
        newpostdiv.appendChild(newdiv);
        newdiv.appendChild(newh3);
        newh3.appendChild(newatag1);
        newdiv.appendChild(newdiv2);
        newdiv.appendChild(newtext);
    }


    $('#container').pinto({
        itemWidth:250,
        gapX:10,
        gapY:10,
        onItemLayout: function($item, column, position) {
        }
    });
    
    $("#pintoInit").click(function(){
        $('#container').pinto();
    });
    
    $("#pintoDestroy").click(function(){
        $('#container').pinto("destroy");
    });

    setTimeout(function(){
          $('#container').pinto();
    },100);

    $("#password").keyup(function(){
       if($(this).val()=="2017413518"){
          $(".password").fadeOut();
          $('html, body').css({
             overflow: 'auto',
             height: 'auto'
          });
       }
    });

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    setInterval(function(){
           var windowwidth = $(window).width();
           var bubblerandomleft=Math.ceil(Math.random()*windowwidth);
           var BubbleDiv=document.getElementById('bubble_layer');
           var newDiv2=document.createElement('div');
           var newImg2=document.createElement('img');
           newDiv2.setAttribute("style","position:fixed;left:"+bubblerandomleft+"px;top:850px;width:60px;height:60px");
           newDiv2.setAttribute("class","bubbleflying");
           newImg2.setAttribute("src","images/bubble.png");
           newDiv2.appendChild(newImg2);
           BubbleDiv.appendChild(newDiv2);
           newDiv2.style.transition="ease-in 5s";

           setTimeout(function(){newDiv2.style.top="0px";},200);
           var bubbleburst=false;

           newDiv2.onclick=function(event){
              var currentX=event.clientX;
              var currentY=event.clientY;
              BubbleDiv.removeChild(newDiv2);
              bubbleburst=true;

              var newBubblefeather1=document.createElement('div');
              var newBubblefeather1img=document.createElement('img');
              newBubblefeather1.setAttribute("style","position:fixed;left:"+currentX+"px;top:"+(currentY-130)+"px;width:90px;height:108px");
              newBubblefeather1.setAttribute("class","bubblefeather1");
              newBubblefeather1img.setAttribute("src","images/bubble_feather1.png");
              newBubblefeather1.appendChild(newBubblefeather1img);
              BubbleDiv.appendChild(newBubblefeather1);

              var newBubblefeather2=document.createElement('div');
              var newBubblefeather2img=document.createElement('img');
              newBubblefeather2.setAttribute("style","position:fixed;left:"+(currentX-100)+"px;top:"+(currentY-80)+"px;width:93px;height:81px");
              newBubblefeather2.setAttribute("class","bubblefeather2");
              newBubblefeather2img.setAttribute("src","images/bubble_feather2.png");
              newBubblefeather2.appendChild(newBubblefeather2img);
              BubbleDiv.appendChild(newBubblefeather2);
              
              var newBubbleheart1=document.createElement('div');
              var newBubbleheart1img=document.createElement('img');
              newBubbleheart1.setAttribute("style","position:fixed;left:"+(currentX-10)+"px;top:"+(currentY-20)+"px;width:24px;height:24px");
              newBubbleheart1.setAttribute("class","bubbleheart1");
              newBubbleheart1img.setAttribute("src","images/bubble_heart1.png");
              newBubbleheart1.appendChild(newBubbleheart1img);
              BubbleDiv.appendChild(newBubbleheart1);

              var newBubbleheart2=document.createElement('div');
              var newBubbleheart2img=document.createElement('img');
              newBubbleheart2.setAttribute("style","position:fixed;left:"+(currentX-50)+"px;top:"+(currentY+20)+"px;width:16px;height:16px");
              newBubbleheart2.setAttribute("class","bubbleheart2");
              newBubbleheart2img.setAttribute("src","images/bubble_heart2.png");
              newBubbleheart2.appendChild(newBubbleheart2img);
              BubbleDiv.appendChild(newBubbleheart2);

              var newBubblestar1=document.createElement('div');
              var newBubblestar1img=document.createElement('img');
              newBubblestar1.setAttribute("style","position:fixed;left:"+(currentX+10)+"px;top:"+(currentY+40)+"px;width:24px;height:24px");
              newBubblestar1.setAttribute("class","bubblestar1");
              newBubblestar1img.setAttribute("src","images/bubble_star1.png");
              newBubblestar1.appendChild(newBubblestar1img);
              BubbleDiv.appendChild(newBubblestar1);

              var newBubblestar2=document.createElement('div');
              var newBubblestar2img=document.createElement('img');
              newBubblestar2.setAttribute("style","position:fixed;left:"+(currentX-30)+"px;top:"+(currentY-10)+"px;width:34px;height:34px");
              newBubblestar2.setAttribute("class","bubblestar1");
              newBubblestar2img.setAttribute("src","images/bubble_star2.png");
              newBubblestar2.appendChild(newBubblestar2img);
              BubbleDiv.appendChild(newBubblestar2);

              var newBubblestar3=document.createElement('div');
              var newBubblestar3img=document.createElement('img');
              newBubblestar3.setAttribute("style","position:fixed;left:"+(currentX-10)+"px;top:"+(currentY)+"px;width:16px;height:16px");
              newBubblestar3.setAttribute("class","bubblestar1");
              newBubblestar3img.setAttribute("src","images/bubble_star3.png");
              newBubblestar3.appendChild(newBubblestar3img);
              BubbleDiv.appendChild(newBubblestar3);
              
              var falltime=0;
              
              //if onmouseover bubble in the lower part of screen, make it fall faster
              if(currentY<500){
                  falltime=7100;
                  newBubblefeather1.style.transition="ease-in 10s";
                  newBubblefeather2.style.transition="ease-in 9s";
                  newBubbleheart1.style.transition="ease-in 10s";
                  newBubbleheart2.style.transition="ease-in 9s";
                  newBubblestar1.style.transition="ease-in 10s";
                  newBubblestar2.style.transition="ease-in 9.5s";
                  newBubblestar3.style.transition="ease-in 9.5s";
              }else{
                  falltime=3100;
                  newBubblefeather1.style.transition="ease-in 3s";
                  newBubblefeather2.style.transition="ease-in 2s";
                  newBubbleheart1.style.transition="ease-in 3s";
                  newBubbleheart2.style.transition="ease-in 2s";
                  newBubblestar1.style.transition="ease-in 3s";
                  newBubblestar2.style.transition="ease-in 2.5s";
                  newBubblestar3.style.transition="ease-in 2.5s";
              }

              setTimeout(function(){
                newBubblefeather1.style.top="800px";
                newBubblefeather2.style.top="800px";
                newBubbleheart1.style.top="830px";
                newBubbleheart2.style.top="840px";
                newBubblestar1.style.top="820px";
                newBubblestar2.style.top="820px";
                newBubblestar3.style.top="820px";
              },200);
              console.log(newBubblefeather1);

              setTimeout(function(){
                BubbleDiv.removeChild(newBubblefeather1);
                BubbleDiv.removeChild(newBubblefeather2);
                BubbleDiv.removeChild(newBubbleheart1);
                BubbleDiv.removeChild(newBubbleheart2);
                BubbleDiv.removeChild(newBubblestar1);
                BubbleDiv.removeChild(newBubblestar2);
                BubbleDiv.removeChild(newBubblestar3);
              },falltime);
           }
           
           setTimeout(function(){
              if(!bubbleburst){
                 BubbleDiv.removeChild(newDiv2);
              }
           },5200);
    },2000);
});