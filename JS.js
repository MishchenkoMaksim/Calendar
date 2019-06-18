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
        ],

        row = document.getElementsByTagName('td'),
        modal = document.getElementsByClassName('modal')[0],
        save = document.getElementById('save'),
        cncl = document.getElementById('cncl'),
        txt = document.getElementById('txt');

    function createCalend(num) {
        month += (num || 0);
        now = new Date();
        now.setMonth(month);
        now.setDate(1);
        var blank = (now.getDay() == 0) ? 6 : now.getDay() - 1;
        var text = '<table><tr>';



        text += '<div class="days"><span>Monday</span><span>Tuesday</span><span>Wednesday</span><span>Thursday</span><span>Friday</span><span>Saturday</span><span>Sunday</span></div>';

        for (var i = 0; i < blank; i++) {
            text += '<td>&nbsp;</td>';
        }

        all_td = blank;
        now.setMonth(now.getMonth() + 1);
        now.setDate(0);
        var days = now.getDate();

        for (var k = 1; k <= days; k++) {
            text += '<td>' + k + '</td>';
            console.log(k);
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

        for (var i = 0; i < row.length; i++) {

            var t;

            row[i].style.width = "10%";

            row[i].addEventListener('click', function () {
                t = this;
                modal.classList.toggle('none');
            });

            save.onclick = function () {
                var p = document.createElement('p');
                p.style.fontSize = "15px";
                p.style.textOverflow = 'ellipsis';
                p.style.backgroundColor = 'mediumaquamarine';
                p.innerHTML = txt.value;
                t.appendChild(p);
                modal.classList.toggle('none');
                txt.value = '';
            }
        }

    }
    createCalend();

    nxt.onclick = function () {
        createCalend(1);
    }

    prev.onclick = function () {
        createCalend(-1);
    }

    cncl.onclick = function () {
        modal.classList.toggle('none');
        txt.value = '';
    }
}