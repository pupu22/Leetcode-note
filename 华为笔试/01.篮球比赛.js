// 将10个球员分为两组，使他们的总战力差最小

function solveMethod(line) {
    const split = line.split(" ");
  
    const ints = [];
    for (const s of split) {
      ints.push(parseInt(s));
    }
  
    let min = Number.MAX_VALUE;
    for (let i = 0; i < 10000; ++i) {
      const tmp = [...ints];
      let x = 0,
        y = 0;
      for (let j = 0; j < 5; j++) {
        // 随机拿两个数
        x += tmp.splice(Math.floor(Math.random() * tmp.length), 1)[0];
        y += tmp.splice(Math.floor(Math.random() * tmp.length), 1)[0];
      }
      const diff = Math.abs(x - y);
      if (diff < min) {
        min = diff;
      }
    }
  
    console.log(min);
  }

  //cal('1 2 3 4 5 6 7 8 9 10')
  solveMethod("1 2 3 4 5 6 7 8 9 10");
  
  