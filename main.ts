
const htmlVideo = document.querySelector<HTMLVideoElement>('#video')!;
const htmlCanvas1 = document.querySelector<HTMLCanvasElement>('#canvas1')!;
const htmlCanvas2 = document.querySelector<HTMLCanvasElement>('#canvas2')!;
const htmlFileInput = document.querySelector<HTMLInputElement>('#file')!;
const textInput1 = document.querySelector<HTMLInputElement>('#t1')!;
const textInput2 = document.querySelector<HTMLInputElement>('#t2')!;
const textInput3 = document.querySelector<HTMLInputElement>('#t3')!;
const renderButton = document.querySelector<HTMLButtonElement>('#render')!;

const width = 500;
const height = width / 16 * 9;


const context1 = htmlCanvas1.getContext('2d')!;
const context2 = htmlCanvas2.getContext('2d')!;

const loop = () => {
    if (htmlVideo.paused || htmlVideo.ended) return;
    
    context1.drawImage(htmlVideo, 0, 0, width, height);

    context1.fillStyle = '#ff0000'
    context1.font = '24px Monospace'
    context1.fillText('Fuck dig', 200, 200);

    window.requestAnimationFrame(() => loop());
}

const main = () => {
    
    htmlVideo.addEventListener('play', () => {
        htmlCanvas1.width = width;
        htmlCanvas1.height = height;
        htmlCanvas2.width = width;
        htmlCanvas2.height = height;
        htmlVideo.width = width;
        htmlVideo.height = height;
        loop();
    });

    htmlFileInput.addEventListener('change', () => {
        if (htmlFileInput.files === null) return;
        const file = htmlFileInput.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', (e) => {
            if (e.target === null) return;
            const ab = e.target.result;
            const blob = window.URL.createObjectURL(ab);
            const a = document.createElement('a');
            a.href = blob;
            a.target = 'blank';
            a.click();
        });
    });

}


main();