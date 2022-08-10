setInterval(() => {
    let d = new Date();
    
    let hTime = d.getHours();   
    let mTime = d.getMinutes();    
    let sTime = d.getSeconds();
    let msTime = d.getMilliseconds();
    
    // 12 hrs = 360 deg
    // 1 hr = 360/12 deg = 30 deg
    let hRotation = 30*hTime + mTime/2;

    // 60 mins = 360 deg
    // 1 min = 360/60 deg = 6 deg
    let mRotation = 6*mTime + sTime/10;

    // 60 sec = 360 deg
    // 1 sec = 360/60 deg = 6 deg

    // 1000 ms = 6 deg
    // 1 ms = 6/1000 deg
    // msTime ms = msTime*0.006
    let sRotation = 6*sTime + msTime*0.006;
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    mn.style.transform = `rotate(${mRotation}deg)`;
    sc.style.transform = `rotate(${sRotation}deg)`;
}, 1);