jQuery(document).ready(function () {
    $('img').click(function () {
        console.log('alt-pic is', $(this).attr('alt-pic'));
        let ss = $(this).attr('alt-pic');
        if (ss[1] === 'a') {
            ss=  ss.replace('a','b');
            console.log(ss);
        }
        else { ss = ss.replace('b', 'a'); console.log(ss); }
        $(this).attr('src','img/'+ ss);
    });
   
});