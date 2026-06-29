function a() {
    console.log("A start");

    b();

    console.log("A end");
}

function b() {
    console.log("B start");

    c();

    console.log("B end");
}

function c() {
    console.log("C start");

    setTimeout(() => {
        console.log("C async (timer)");
    }, 2000);

    console.log("C end");
}

a();