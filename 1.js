
var searves = function (data) {
    var t = `

    <div class="div-searves">
        <div class="div-searves-vip">
            <img src=${data[1].img}>
            <p>${data[1].name}</p><span class="span-illustrate">${data[1].illustrate}</span>
            <span class="span-month">${data[1].mongth}元/月</span><h4> > </h4>
        </div>
    </div>
    `
    $('.div-searves').append(t)
}

var addSearves = function () {

}

var data = [
    {
        'img': '"pay/a1.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a2.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a3.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a4.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a5.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a6.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a7.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a8.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    },
    {
        'img': '"pay/a8.png"',
        'name': 'QQ会员',
        'illustrate': 'QQ、游戏、生活特权体验',
        'mongth': 10,
    }
]
