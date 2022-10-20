//initializing all DOM variables
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let b7 = document.querySelector('#b7');
let b8 = document.querySelector('#b8');
let b9 = document.querySelector('#b9');
let sec = document.querySelector('section');
let res = document.querySelector('#reset');
let tit = document.querySelector('#tit');
let but = document.querySelectorAll('.but');
let theme = document.querySelector('#theme');``
let mod = document.querySelector('#mode');

//initializing the required variables
let board = [['-','-','-'],['-','-','-'],['-','-','-']];
let i = 0;
let p1 = [];
let p2 = [];
let end = false;
let mode = "dark";

//initializing the required css classes
tit.classList.add('tit_p1');
sec.classList.add('sec_p1');
but.forEach((b) => {
    b.classList.add('but_p1');
})
mod.innerText = "L I G H T"

//switching to light mode
function light(){
    theme.href = "Tac.css";
    mod.innerText = "L I G H T";
}

//switching to dark mode
function dark(){
    theme.href = "Toc.css";
    mod.innerText = "D A R K";
}

//switching to player1
function p_1(){
    tit.classList.remove('tit_p2')
    tit.classList.add('tit_p1')
    sec.classList.remove('sec_p2')
    sec.classList.add('sec_p1')
    but.forEach((b) => {
        b.classList.remove('but_p2')
        b.classList.add('but_p1')
    })
    res.classList.remove('rst_p2');
    res.classList.add('rst_p1');
    res.innerText = "R E S E T";
}

//switching to player2
function p_2(){
    tit.classList.remove('tit_p1')
    tit.classList.add('tit_p2')
    sec.classList.remove('sec_p1')
    sec.classList.add('sec_p2')
    but.forEach((b) => {
        b.classList.remove('but_p1')
        b.classList.add('but_p2')
    })
    res.classList.remove('rst_p1');
    res.classList.add('rst_p2');
    res.innerText = "R E S E T";
}

//checking if someone has won and showing the user
function check(){
    if(p1.length > 2){
        if(p1.find(i=>i===1)!==undefined){
            if(p1.find(i=>i===2)!==undefined){
                if(p1.find(i=>i===3)!==undefined){
                    b1.classList.add('win_p1');
                    b2.classList.add('win_p1');
                    b3.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
            if(p1.find(i=>i===4)!==undefined){
                if(p1.find(i=>i===7)!==undefined){
                    b1.classList.add('win_p1');
                    b4.classList.add('win_p1');
                    b7.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
            if(p1.find(i=>i===5)!==undefined){
                if(p1.find(i=>i===9)!==undefined){
                    b1.classList.add('win_p1');
                    b5.classList.add('win_p1');
                    b9.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
        }
        if(p1.find(i=>i===5)!==undefined){
            if(p1.find(i=>i===4)!==undefined){
                if(p1.find(i=>i===6)!==undefined){
                    b5.classList.add('win_p1');
                    b4.classList.add('win_p1');
                    b6.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
            if(p1.find(i=>i===2)!==undefined){
                if(p1.find(i=>i===8)!==undefined){
                    b5.classList.add('win_p1');
                    b2.classList.add('win_p1');
                    b8.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
            if(p1.find(i=>i===3)!==undefined){
                if(p1.find(i=>i===7)!==undefined){
                    b5.classList.add('win_p1');
                    b3.classList.add('win_p1');
                    b7.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
        }
        if(p1.find(i=>i===9)!==undefined){
            if(p1.find(i=>i===7)!==undefined){
                if(p1.find(i=>i===8)!==undefined){
                    b9.classList.add('win_p1');
                    b7.classList.add('win_p1');
                    b8.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
            if(p1.find(i=>i===3)!==undefined){
                if(p1.find(i=>i===6)!==undefined){
                    b9.classList.add('win_p1');
                    b3.classList.add('win_p1');
                    b6.classList.add('win_p1');
                    res.classList.add('w_p1');
                    p_1();
                    end = true;
                }
            }
        }
    }
    if(p2.length > 2){
        if(p2.find(i=>i===1)!==undefined){
            if(p2.find(i=>i===2)!==undefined){
                if(p2.find(i=>i===3)!==undefined){
                    b1.classList.add('win_p2');
                    b2.classList.add('win_p2');
                    b3.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
            if(p2.find(i=>i===4)!==undefined){
                if(p2.find(i=>i===7)!==undefined){
                    b1.classList.add('win_p2');
                    b4.classList.add('win_p2');
                    b7.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
            if(p2.find(i=>i===5)!==undefined){
                if(p2.find(i=>i===9)!==undefined){
                    b1.classList.add('win_p2');
                    b5.classList.add('win_p2');
                    b9.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
        }
        if(p2.find(i=>i===5)!==undefined){
            if(p2.find(i=>i===4)!==undefined){
                if(p2.find(i=>i===6)!==undefined){
                    b5.classList.add('win_p2');
                    b4.classList.add('win_p2');
                    b6.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
            if(p2.find(i=>i===2)!==undefined){
                if(p2.find(i=>i===8)!==undefined){
                    b5.classList.add('win_p2');
                    b2.classList.add('win_p2');
                    b8.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
            if(p2.find(i=>i===3)!==undefined){
                if(p2.find(i=>i===7)!==undefined){
                    b5.classList.add('win_p2');
                    b7.classList.add('win_p2');
                    b3.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
        }
        if(p2.find(i=>i===9)!==undefined){
            if(p2.find(i=>i===7)!==undefined){
                if(p2.find(i=>i===8)!==undefined){
                    b9.classList.add('win_p2');
                    b7.classList.add('win_p2');
                    b8.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
            if(p2.find(i=>i===3)!==undefined){
                if(p2.find(i=>i===6)!==undefined){
                    b9.classList.add('win_p2');
                    b6.classList.add('win_p2');
                    b3.classList.add('win_p2');
                    res.classList.add('w_p2');
                    p_2();
                    end = true;
                }
            }
        }
    }
}

//resetting the board for a new game
res.addEventListener('click',function(){
    board = [['-','-','-'],['-','-','-'],['-','-','-']];
    i = 0;
    p1 = [];
    p2 = [];
    end = false;
    but.forEach((b) => {
        b.innerText='';
    })
    but.forEach((b) => {
        b.classList.remove('win_p1');
    })
    but.forEach((b) => {
        b.classList.remove('win_p2');
    })
    res.classList.remove('w');
    tit.classList.remove('tit_p2');
    tit.classList.add('tit_p1');
    sec.classList.remove('sec_p2');
    sec.classList.add('sec_p1');
    but.forEach((b) => {
        b.classList.add('but_p1')
        b.classList.remove('but_p2')
    })
    res.classList.remove('rst_p1');
    res.classList.remove('rst_p2');
    res.classList.remove('w_p2');
    res.classList.remove('w_p1');
    res.innerText = "";
});

//choosing [1,1] as the move
b1.addEventListener('click',function(){
    if(end===false){
        if(board[0][0]==='-'){
            if(i%2===0){
                p_2();
                b1.innerText='X';
                board[0][0]='X';
                i++;
                p1.push(1);
            }
            else{
                p_1();
                b1.innerText='O';
                board[0][0]='O';
                i++;
                p2.push(1);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [1,2] as the move
b2.addEventListener('click',function(){
    if(end===false){
        if(board[0][1]==='-'){
            if(i%2===0){
                p_2();
                b2.innerText='X';
                board[0][1]='X';
                i++;
                p1.push(2);
            }
            else{
                p_1();
                b2.innerText='O';
                board[0][1]='O';
                i++;
                p2.push(2);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [1,3] as the move
b3.addEventListener('click',function(){
    if(end===false){
        if(board[0][2]==='-'){
            if(i%2===0){
                p_2();
                b3.innerText='X';
                board[0][2]='X';
                i++;
                p1.push(3);
            }
            else{
                p_1();
                b3.innerText='O';
                board[0][2]='O';
                i++;
                p2.push(3);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [2,1] as the move
b4.addEventListener('click',function(){
    if(end===false){
        if(board[1][0]==='-'){
            if(i%2===0){
                p_2();
                b4.innerText='X';
                board[1][0]='X';
                i++;
                p1.push(4);
            }
            else{
                p_1();
                b4.innerText='O';
                board[1][0]='O';
                i++;
                p2.push(4);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [2,2] as the move
b5.addEventListener('click',function(){
    if(end===false){
        if(board[1][1]==='-'){
            if(i%2===0){
                p_2();
                b5.innerText='X';
                board[1][1]='X';
                i++;
                p1.push(5);
            }
            else{
                p_1();
                b5.innerText='O';
                board[1][1]='O';
                i++;
                p2.push(5);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [2,3] as the move
b6.addEventListener('click',function(){
    if(end===false){
        if(board[1][2]==='-'){
            if(i%2===0){
                p_2();
                b6.innerText='X';
                board[1][2]='X';
                i++;
                p1.push(6);
            }
            else{
                p_1();
                b6.innerText='O';
                board[1][2]='O';
                i++;
                p2.push(6);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [3,1] as the move
b7.addEventListener('click',function(){
    if(end===false){
        if(board[2][0]==='-'){
            if(i%2===0){
                p_2();
                b7.innerText='X';
                board[2][0]='X';
                i++;
                p1.push(7);
            }
            else{
                p_1();
                b7.innerText='O';
                board[2][0]='O';
                i++;
                p2.push(7);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [3,2] as the move
b8.addEventListener('click',function(){
    if(end===false){
        if(board[2][1]==='-'){
            if(i%2===0){
                p_2();
                b8.innerText='X';
                board[2][1]='X';
                i++;
                p1.push(8);
            }
            else{
                p_1();
                b8.innerText='O';
                board[2][1]='O';
                i++;
                p2.push(8);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//choosing [3,3] as the move
b9.addEventListener('click',function(){
    if(end===false){
        if(board[2][2]==='-'){
            if(i%2===0){
                p_2();
                b9.innerText='X';
                board[2][2]='X';
                i++;
                p1.push(9);
            }
            else{
                p_1();
                b9.innerText='O';
                board[2][2]='O';
                i++;
                p2.push(9);
            }
            check();
        }
    }
    if(i===9){
        res.classList.add('w_p1');
        p_1();
    }
})

//switching to light/dark mode
mod.addEventListener('click',function(){
    if(mode==="dark"){
        mode = "light";
        dark();
    }
    else{
        mode = "dark";
        light();
    }
})