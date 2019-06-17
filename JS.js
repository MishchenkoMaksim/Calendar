window.onload = function () {

    var shwDate = document.getElementById('date'),
        all_td = 0,
        now = new Date(),
        month = new Date().getMonth(),
        today = now.getDate(),
        nxt = document.getElementById('nxt'),
        prev = document.getElementById('prev'),
        monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

    function createCalend(num) {
        month += (num || 0);
        now = new Date();
        now.setMonth(month);
        now.setDate(1);
        var blank = (now.getDay() == 0) ? 6 : now.getDay() - 1;
        var text = '<table><tr>';

        for (var i = 0; i < blank; i++) {
            text += '<td>&nbsp;</td>';
        }

        all_td = blank;
        now.setMonth(now.getMonth() + 1);
        now.setDate(0);
        var days = now.getDate();

        for (var k = 1; k <= days; k++) {
            text += '<td>' + k + '</td>';
            all_td++;
            if (all_td % 7 == 0) { text += '</tr><tr>'; }
        }

        var last = now.getDay();
        var last_blank = (last == 0) ? 0 : 7 - last;

        for (var k = 1; k <= last_blank; k++) {
            text += '<td>&nbsp;</td>';
        }

        text += '</tr></table>';
        document.getElementById('calendar').innerHTML = text;
        shwDate.innerHTML = monthNames[now.getMonth()];

    }
    createCalend();

    nxt.onclick = function () {
        createCalend(1);
    }

    prev.onclick = function () {
        createCalend(-1);
    }
}