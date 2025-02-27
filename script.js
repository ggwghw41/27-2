document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const toggleButton = document.getElementById("toggleHeader");
    const container = document.querySelector(".container");
    const icon = toggleButton.querySelector("i");

    // Mặc định ẩn header
    header.classList.remove("show");
    container.classList.remove("shift-down");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");

    toggleButton.addEventListener("click", function () {
        if (header.classList.contains("show")) {
            header.classList.remove("show");
            container.classList.remove("shift-down");
            icon.classList.remove("fa-x");
            icon.classList.add("fa-bars"); // Đổi sang icon mắt bị che
        } else {
            header.classList.add("show");
            container.classList.add("shift-down");
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-x"); // Đổi sang icon mắt mở
        }
    });
});


//-------------------PHẦN 1A - TÌM TỪ ĐỒNG NGHĨA-----------------------------
const cauHoiDongNghia = [
    { 
        cau: "他学习非常努力。",
      
        luaChon: ["马虎", "刻苦", "复杂", "下降"],
        dapAn: "B"
    },
    { 
        cau: "老师的讲解很清楚。",
        
        luaChon: ["明白", "困难", "马虎", "低落"],
        dapAn: "A"
    },
    { 
        cau: "这本书的内容很有趣。",
    
        luaChon: ["无聊", "乏味", "生动", "下降"],
        dapAn: "C"
    },
    { 
        cau: "他取得了优异的成绩。",
       
        luaChon: ["出色", "低落", "复杂", "马虎"],
        dapAn: "A"
    },
    { 
        cau: "考试前，我们要复习。",
      
        luaChon: ["忘记", "低落", "温习", "降低"],
        dapAn: "C"
    }
];

//-------------------PHẦN 1B - TÌM TỪ TRÁI NGHĨA-----------------------------
const cauHoiTraiNghia = [
    { 
        cau: "他学习很认真。",
     
        luaChon: ["刻苦", "努力", "马虎", "出色"],
        dapAn: "C"
    },
    { 
        cau: "这个问题很简单。",
   
        luaChon: ["复杂", "清楚", "明白", "出色"],
        dapAn: "A"
    },
    { 
        cau: "她的作业完成得很快。",
    
        luaChon: ["低落", "下降", "认真", "慢"],
        dapAn: "D"
    },
    { 
        cau: "他的成绩提高了。",
     
        luaChon: ["下降", "出色", "刻苦", "认真"],
        dapAn: "A"
    },
    { 
        cau: "他对学习很感兴趣。",
     
        luaChon: ["乏味", "毫无兴趣", "温习", "出色"],
        dapAn: "B"
    }
];


//-------------------PHẦN 2 - HOÀN THÀNH CÂU-----------------------------
const cauHoiHoanThanhCau = [
    { 
        cau: "每天早上我都会______中文。",
        luaChon: ["复习", "忘记", "休息", "睡觉"], 
        dapAn: "复习"
    },
    { 
        cau: "老师让我们在考试前______所有的生词。",
        luaChon: ["记住", "丢失", "减少", "浪费"], 
        dapAn: "记住"
    },
    { 
        cau: "上课的时候，我们要认真______老师的话。",
        luaChon: ["听", "看", "玩", "关"], 
        dapAn: "听"
    },
    { 
        cau: "学好一门语言需要每天______。",
        luaChon: ["练习", "放弃", "忘记", "减少"], 
        dapAn: "练习"
    },
    { 
        cau: "考试前，我们要______一下课本的内容。",
        luaChon: ["复习", "忘记", "删除", "丢失"], 
        dapAn: "复习"
    },
    { 
        cau: "他每天都会______生词，以便更快提高汉语水平。",
        luaChon: ["记", "扔", "减少", "浪费"], 
        dapAn: "记"
    },
    { 
        cau: "如果你听不懂老师的话，可以______问题。",
        luaChon: ["问", "写", "看", "忘"], 
        dapAn: "问"
    },
    { 
        cau: "我们应该______学习，而不是只想着玩。",
        luaChon: ["努力", "浪费", "忘记", "放弃"], 
        dapAn: "努力"
    },
    { 
        cau: "他总是在图书馆里______，因为那里的环境很好。",
        luaChon: ["学习", "睡觉", "跳舞", "唱歌"], 
        dapAn: "学习"
    },
    { 
        cau: "你可以告诉我这个词的______吗？",
        luaChon: ["意思", "问题", "时间", "颜色"], 
        dapAn: "意思"
    },
    { 
        cau: "汉语考试的______不太难，但需要认真准备。",
        luaChon: ["内容", "温度", "天气", "音乐"], 
        dapAn: "内容"
    },
    { 
        cau: "每天早上我都会花一个小时______汉字。",
        luaChon: ["写", "跑", "睡", "吃"], 
        dapAn: "写"
    },
    { 
        cau: "他已经把这篇文章______三次了，但还是不太明白。",
        luaChon: ["读", "丢", "吃", "看"], 
        dapAn: "读"
    },
    { 
        cau: "为了提高听力，我每天都______中文广播。",
        luaChon: ["听", "说", "看", "写"], 
        dapAn: "听"
    },
    { 
        cau: "这次考试的题目很______，我花了很多时间做。",
        luaChon: ["难", "容易", "简单", "清楚"], 
        dapAn: "难"
    },
    { 
        cau: "他总是______老师的问题，所以学习成绩很好。",
        luaChon: ["回答", "拒绝", "忘记", "扔掉"], 
        dapAn: "回答"
    },
    { 
        cau: "学习语言最重要的是多听、多______。",
        luaChon: ["说", "跑", "睡", "坐"], 
        dapAn: "说"
    },
    { 
        cau: "如果你不理解这句话，可以再______一遍。",
        luaChon: ["读", "吃", "看", "关"], 
        dapAn: "读"
    },
    { 
        cau: "我们应该每天______一点新的知识。",
        luaChon: ["学习", "丢弃", "删除", "忘记"], 
        dapAn: "学习"
    },
    { 
        cau: "他总是很认真地______每一个汉字的写法。",
        luaChon: ["记住", "忘记", "忽略", "删除"], 
        dapAn: "记住"
    }
];

//-------------------PHẦN 3 - SẮP XẾP-----------------------------
const cauHoiSapXep = [
    {
        "cau": "你, 喜欢, 什么, 运动?",
        "luaChon": [
            "你喜欢什么运动?",
            "什么运动你喜欢?",
            "喜欢什么你运动?",
            "运动你喜欢什么?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "他, 每天, 早上, 跑步.",
        "luaChon": [
            "他每天早上跑步.",
            "每天早上他跑步.",
            "早上每天他跑步.",
            "跑步每天他早上."
        ],
        "dapAn": "A"
    },
    {
        "cau": "这个, 书, 是, 我的.",
        "luaChon": [
            "这个书是我的.",
            "是这个书我的.",
            "我的书是这个.",
            "书是这个我的."
        ],
        "dapAn": "A"
    },
    {
        "cau": "你, 去, 过, 北京, 吗?",
        "luaChon": [
            "你去过北京吗?",
            "北京你去过吗?",
            "去北京你过吗?",
            "你过北京去吗?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "我, 在, 学校, 学习, 汉语.",
        "luaChon": [
            "我在学校学习汉语.",
            "学校我学习汉语在.",
            "汉语我在学习学校.",
            "在学校汉语我学习."
        ],
        "dapAn": "A"
    },
    {
        "cau": "昨天, 他, 买, 了, 一本书.",
        "luaChon": [
            "昨天他买了一本书.",
            "他昨天买了一本书.",
            "昨天一本书他买了.",
            "一本书他昨天买了."
        ],
        "dapAn": "A"
    },
    {
        "cau": "我们, 一起, 去, 看, 电影.",
        "luaChon": [
            "我们一起去看电影.",
            "我们去一起看电影.",
            "去看电影我们一起.",
            "一起我们看去电影."
        ],
        "dapAn": "A"
    },
    {
        "cau": "天气, 今天, 很, 好.",
        "luaChon": [
            "今天天气很好.",
            "天气今天很好.",
            "今天很好天气.",
            "很好今天天气."
        ],
        "dapAn": "A"
    },
    {
        "cau": "你, 怎么, 去, 学校?",
        "luaChon": [
            "你怎么去学校?",
            "学校你怎么去?",
            "去学校你怎么?",
            "怎么你学校去?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "我, 想, 吃, 米饭.",
        "luaChon": [
            "我想吃米饭.",
            "想我吃米饭.",
            "米饭我想吃.",
            "吃米饭我想."
        ],
        "dapAn": "A"
    },
    {
        "cau": "她, 会, 说, 汉语.",
        "luaChon": [
            "她会说汉语.",
            "会她说汉语.",
            "汉语她会说.",
            "说汉语她会."
        ],
        "dapAn": "A"
    },
    {
        "cau": "你, 认识, 他, 吗?",
        "luaChon": [
            "你认识他吗?",
            "认识他你吗?",
            "认识你他吗?",
            "他认识你吗?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "这个, 苹果, 很, 甜.",
        "luaChon": [
            "这个苹果很甜.",
            "苹果这个很甜.",
            "很甜这个苹果.",
            "甜很这个苹果."
        ],
        "dapAn": "A"
    },
    {
        "cau": "他, 在, 看, 电视.",
        "luaChon": [
            "他在看电视.",
            "电视在他看.",
            "看电视他在.",
            "在电视他看."
        ],
        "dapAn": "A"
    },
    {
        "cau": "明天, 你, 有, 时间, 吗?",
        "luaChon": [
            "明天你有时间吗?",
            "你明天有时间吗?",
            "有明天你时间吗?",
            "时间明天你有吗?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "老师, 在, 教室, 上课.",
        "luaChon": [
            "老师在教室上课.",
            "教室老师在上课.",
            "上课老师在教室.",
            "在教室上课老师."
        ],
        "dapAn": "A"
    },
    {
        "cau": "这个, 问题, 很, 简单.",
        "luaChon": [
            "这个问题很简单.",
            "问题这个很简单.",
            "很简单这个问题.",
            "简单这个问题很."
        ],
        "dapAn": "A"
    },
    {
        "cau": "你, 怎么, 学习, 汉语?",
        "luaChon": [
            "你怎么学习汉语?",
            "怎么你学习汉语?",
            "汉语你怎么学习?",
            "学习汉语你怎么?"
        ],
        "dapAn": "A"
    },
    {
        "cau": "我, 吃, 了, 午饭.",
        "luaChon": [
            "我吃了午饭.",
            "吃了我午饭.",
            "午饭吃了我.",
            "午饭我吃了."
        ],
        "dapAn": "A"
    },
    {
        "cau": "他们, 正在, 唱, 歌.",
        "luaChon": [
            "他们正在唱歌.",
            "正在他们唱歌.",
            "唱歌他们正在.",
            "歌他们正在唱."
        ],
        "dapAn": "A"
    }
];

//-------------------PHẦN 4 - DỊCH NGHĨA CÂU-----------------------------
const cauHoiDichNghia =  [
    {
      "cau": "作者每天几点起床？",
      "luaChon": ["六点", "七点", "八点", "九点"],
      "dapAn": "六点"
    },
    {
      "cau": "作者在学校上课时做什么？",
      "luaChon": ["玩手机", "认真听课", "睡觉", "聊天"],
      "dapAn": "认真听课"
    },
    {
      "cau": "作者中午休息时通常做什么？",
      "luaChon": ["看书或者听中文歌曲", "去超市买东西", "睡觉", "打篮球"],
      "dapAn": "看书或者听中文歌曲"
    },
    {
      "cau": "作者下午放学后通常去哪里？",
      "luaChon": ["图书馆", "公园", "咖啡店", "操场"],
      "dapAn": "图书馆"
    },
    {
      "cau": "遇到不懂的问题，作者会怎么做？",
      "luaChon": ["问老师或者上网查资料", "不管它", "随便猜", "问同学"],
      "dapAn": "问老师或者上网查资料"
    },
    {
      "cau": "作者每天都会做什么来提高汉语水平？",
      "luaChon": ["记生词和造句", "只听中文歌", "不学习", "玩游戏"],
      "dapAn": "记生词和造句"
    },
    {
      "cau": "作者喜欢看中文电影和电视剧的原因是什么？",
      "luaChon": ["提高听力", "很有趣", "老师要求", "家人喜欢"],
      "dapAn": "提高听力"
    },
    {
      "cau": "作者觉得学习汉语怎么样？",
      "luaChon": ["很有意思", "很无聊", "很简单", "没必要"],
      "dapAn": "很有意思"
    },
    {
      "cau": "作者的学习习惯包括哪些？",
      "luaChon": ["记笔记、复习、做作业", "只上课听讲", "每天玩游戏", "只看电视剧"],
      "dapAn": "记笔记、复习、做作业"
    },
    {
      "cau": "作者将来有什么计划？",
      "luaChon": ["去中国留学", "去美国旅行", "在家工作", "学别的语言"],
      "dapAn": "去中国留学"
    }
  ]

//-------------------PHẦN 5 - ĐỌC HIỂU------------------------------------
const cauHoiDocHieu =[
    {
        "cau": "老师今天教学生什么？",
        "luaChon": ["数学", "汉字", "英语", "历史"],
        "dapAn": "汉字"
    },
    {
        "cau": "学生觉得汉字怎么样？",
        "luaChon": ["很简单", "很难", "很有趣", "不重要"],
        "dapAn": "很难"
    },
    {
        "cau": "学生每天练习汉字多长时间？",
        "luaChon": ["一个小时", "两个小时", "半个小时", "不练习"],
        "dapAn": "一个小时"
    },
    {
        "cau": "老师建议学生怎么记住汉字？",
        "luaChon": ["用卡片记生词", "不需要记", "只看一遍", "随便写"],
        "dapAn": "用卡片记生词"
    },
    {
        "cau": "老师说学习汉字需要什么？",
        "luaChon": ["耐心", "天赋", "时间", "朋友"],
        "dapAn": "耐心"
    },
    {
        "cau": "老师建议学生看什么来提高汉语？",
        "luaChon": ["英文书", "数学书", "汉语书", "故事书"],
        "dapAn": "汉语书"
    },
    {
        "cau": "如果学生有不认识的字，应该怎么办？",
        "luaChon": ["问老师", "不管它", "跳过去", "不学习"],
        "dapAn": "问老师"
    },
    {
        "cau": "学生B为什么只练习半个小时？",
        "luaChon": ["太累了", "作业太多了", "不喜欢学习", "没有笔"],
        "dapAn": "作业太多了"
    },
    {
        "cau": "学生C说他会怎么做？",
        "luaChon": ["努力学习", "放弃学习", "不听老师的", "去玩游戏"],
        "dapAn": "努力学习"
    },
    {
        "cau": "最后老师对学生说什么？",
        "luaChon": ["加油", "再见", "回家", "睡觉"],
        "dapAn": "加油"
    }
]


//------------------- HÀM CHUNG -----------------------------
function taiCauHoi(danhSachCauHoi, vungHienThi, prefix) {
    let vungCauHoi = document.getElementById(vungHienThi);
    vungCauHoi.innerHTML = "";

    danhSachCauHoi.forEach((cauHoi, index) => {
        let noiDungCauHoi = `
        <div class="cau-hoi" id="${prefix}${index + 1}">
            <p>${index + 1}. ${cauHoi.cau}</p>
            ${cauHoi.luaChon.map((luaChon, i) => {
                let kyTu = String.fromCharCode(65 + i);
                return `
                <label id="nhan-${prefix}${index + 1}-${kyTu}">
                    <input type="radio" name="${prefix}${index + 1}" value="${kyTu}"> ${kyTu}. ${luaChon}
                </label><br>
                `;
            }).join("")}
        </div>
        `;
        vungCauHoi.innerHTML += noiDungCauHoi;
    });
}
function chamDiem() {
    let diem = 0;
    let vungKetQua = document.getElementById("ket_qua");

    function tinhDiem(danhSachCauHoi, prefix, diemMoiCau) {
        danhSachCauHoi.forEach((cauHoi, index) => {
            let dapAnDung = cauHoi.dapAn;
            let cacLuaChon = document.querySelectorAll(`input[name="${prefix}${index + 1}"]`);

            // Reset màu tất cả đáp án về đen trước khi chấm điểm
            cacLuaChon.forEach(luaChon => {
                let nhan = document.getElementById(`nhan-${prefix}${index + 1}-${luaChon.value}`);
                if (nhan) {
                    nhan.style.color = "black"; // Màu mặc định
                }
            });

            let dapAnNguoiDung = document.querySelector(`input[name="${prefix}${index + 1}"]:checked`);

            if (dapAnNguoiDung) {
                let nhanNguoiDung = document.getElementById(`nhan-${prefix}${index + 1}-${dapAnNguoiDung.value}`);
                let nhanDapAnDung = document.getElementById(`nhan-${prefix}${index + 1}-${dapAnDung}`);

                if (dapAnNguoiDung.value === dapAnDung) {
                    diem += diemMoiCau;
                    nhanNguoiDung.style.color = "green"; // Chọn đúng -> chữ xanh
                } else {
                    nhanNguoiDung.style.color = "red"; // Chọn sai -> chữ đỏ
                    if (nhanDapAnDung) {
                        nhanDapAnDung.style.color = "green"; // Hiển thị đáp án đúng
                    }
                }
            }
        });
    }

    // Chấm điểm theo từng phần
    tinhDiem(cauHoiDongNghia, "dongNghia", 0.1);
    tinhDiem(cauHoiTraiNghia, "traiNghia", 0.1);
    tinhDiem(cauHoiHoanThanhCau, "hoanThanh", 0.1);
    tinhDiem(cauHoiSapXep, "dienTu", 0.2);
    tinhDiem(cauHoiDichNghia, "dichNghia", 0.1);
    tinhDiem(cauHoiDocHieu, "Dochieu", 0.4);
   // Xác định thông báo dựa trên điểm
   let thongBao = "";
   if (diem < 5) {
       thongBao = "❌ Bạn đã thi rớt. Cố gắng hơn lần sau nhé!";
   } else if (diem < 6.5) {
       thongBao = "✅ Bạn đã thi đậu. Hãy tiếp tục cố gắng!";
   } else if (diem < 8.5) {
       thongBao = "🌟 Bạn thật là giỏi! Cố lên nữa nhé!";
   } else {
       thongBao = "🏆 Bạn là thiên tài! Tuyệt vời!";
   }

   // Hiển thị kết quả
   vungKetQua.innerHTML = `<h3>🎯${diem.toFixed(1)} / 10 điểm.</h3><p>${thongBao}</p>`;
}


// Khi trang tải xong, gọi các hàm
document.addEventListener("DOMContentLoaded", () => {
    taiCauHoi(cauHoiDongNghia, "cau_hoi_a", "dongNghia");
    taiCauHoi(cauHoiTraiNghia, "cau_hoi_b", "traiNghia");
    taiCauHoi(cauHoiHoanThanhCau, "cau_hoi_c", "hoanThanh");
    taiCauHoi(cauHoiSapXep, "cau_hoi_d", "dienTu");
    taiCauHoi(cauHoiDichNghia, "cau_hoi_e", "dichNghia");
    taiCauHoi(cauHoiDocHieu,"cau_hoi_f", "Dochieu");
});
