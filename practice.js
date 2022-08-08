const start = Date.now();
for (let rand=0; rand++<500000000;) {
    let N = Math.floor(Math.random() * 1000000) + 1;
    let M = Math.floor(Math.random() * 1000000) + 1;
    let Nover5 = Math.floor(N/5);
    let Mover5 = Math.floor(M/5);
    let Nrem = N % 5;
    let Mrem = M % 5;
    let adj = 0
    for (let i=1; i<=Nrem; i++) {
        for (let j=1; j<=Mrem; j++) {
            !((i+j)%5) && adj++;
        }
    }
    let sol = Nover5*Mover5*5+Nrem*Mover5+Mrem*Nover5+adj;
}
const duration = Date.now() - start;
console.log('completed in ' + duration + ' ms');