export default function random_rgba() {
    var o = Math.round, rand = Math.random, s = 255;
    var rgb = [o(rand()*s), o(rand()*s), o(rand()*s)];
    var max = Math.max(...rgb);
    var [r,g,b] = rgb.map(c => c === max ? c : o(rand()*100));
    return 'rgba(' + r + ',' + g + ',' + b + ',' + 1 + ')';
}