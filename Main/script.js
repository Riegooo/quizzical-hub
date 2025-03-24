window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        document.getElementById("username-display").textContent = loggedInUser.username;
        document.getElementById("password-display").textContent = loggedInUser.strand;

        let quiz1Points = localStorage.getItem(loggedInUser.username + "_quiz1_points");
        let quiz2Points = localStorage.getItem(loggedInUser.username + "_quiz2_points");
        let html1points = localStorage.getItem(loggedInUser.username + "_html_choice");
        let html2points = localStorage.getItem(loggedInUser.username + "_html_blank");
        let css1points = localStorage.getItem(loggedInUser.username + "_css_choice");
        let css2points = localStorage.getItem(loggedInUser.username + "_css_blank");

        quiz1Points = quiz1Points ? parseInt(quiz1Points) : 0;
        quiz2Points = quiz2Points ? parseInt(quiz2Points) : 0;
        html1points = html1points ? parseInt(html1points) : 0;
        html2points = html2points ? parseInt(html2points) : 0;
        css1points = css1points ? parseInt(css1points) : 0;
        css2points = css2points ? parseInt(css2points) : 0;

        localStorage.setItem(loggedInUser.username + "_quiz1_points", quiz1Points);
        localStorage.setItem(loggedInUser.username + "_quiz2_points", quiz2Points);
        localStorage.setItem(loggedInUser.username + "_html_choice", html1points);
        localStorage.setItem(loggedInUser.username + "_html_blank", html2points);
        localStorage.setItem(loggedInUser.username + "_css_choice", css1points);
        localStorage.setItem(loggedInUser.username + "_css_blank", css2points);

        let cssPoints = css1points + css2points;
        let htmlPoints = html1points + html2points;
        let totalPoints = html1points + html2points + css1points + css2points;

        const quiz1Element = document.getElementById("quiz1-points");
        const quiz2Element = document.getElementById("quiz2-points");
        const totalElement = document.getElementById("total-points");
        const html1Element = document.getElementById("html-choice");
        const html2Element = document.getElementById("html-blank");
        const htmlElement = document.getElementById("html-total");
        const css1Element = document.getElementById("css-choice");
        const css2Element = document.getElementById("css-blank");
        const cssElement = document.getElementById("css-total");

        if (quiz1Element) quiz1Element.textContent = quiz1Points;
        if (quiz2Element) quiz2Element.textContent = quiz2Points;
        if (totalElement) totalElement.textContent = totalPoints;
        if (html1Element) html1Element.textContent = html1points;
        if (html2Element) html2Element.textContent = html2points;
        if (htmlElement) htmlElement.textContent = htmlPoints;
        if (css1Element) css1Element.textContent = css1points;
        if (css2Element) css2Element.textContent = css2points;
        if (cssElement) cssElement.textContent = cssPoints;

        document.getElementById("logout-button").addEventListener("click", function() {
            localStorage.removeItem("loggedInUser");
            window.location.href = "../login/index.html";
        });

    } else {
        window.location.href = "../login/index.html";
    }
};
