function recommend() {

    var checked = document.querySelectorAll("input[type='checkbox']:checked");
    var result = document.getElementById("result");

    if (checked.length === 0) {
        result.innerHTML = "<div class='card'><h3>Please select at least one interest.</h3></div>";
        return;
    }

    var output = "";

    for (var i = 0; i < checked.length; i++) {

        var value = checked[i].value;

        if (value === "Technology") {

            output += "<div class='card'>";
            output += "<h3>💻 Technology</h3>";
            output += "<p><b>🎯 Career:</b> IT Support Engineer / Cloud Engineer</p>";
            output += "<p><b>📚 Study:</b> Networking, Operating Systems, Cloud Basics</p>";
            output += "<p><b>🎓 Course:</b> Google IT Support, Cisco Networking Basics</p>";
            output += "<p><b>📺 YouTube:</b> WsCube Tech, Apna College</p>";
            output += "<p><b>🛠 Project:</b> Computer Inventory Management System</p>";
            output += "<p><b>💰 Salary:</b> ₹4–8 LPA</p>";
            output += "</div>";
        }

        else if (value === "Programming") {

            output += "<div class='card'>";
            output += "<h3>👨‍💻 Programming</h3>";
            output += "<p><b>🎯 Career:</b> Software Developer</p>";
            output += "<p><b>📚 Study:</b> Java, Python, C++, DSA</p>";
            output += "<p><b>🎓 Course:</b> Java Programming Masterclass</p>";
            output += "<p><b>📺 YouTube:</b> CodeWithHarry, Kunal Kushwaha</p>";
            output += "<p><b>🛠 Project:</b> Student Management System</p>";
            output += "<p><b>💰 Salary:</b> ₹5–12 LPA</p>";
            output += "</div>";
        }

        else if (value === "Artificial Intelligence") {

            output += "<div class='card'>";
            output += "<h3>🤖 Artificial Intelligence</h3>";
            output += "<p><b>🎯 Career:</b> AI Engineer</p>";
            output += "<p><b>📚 Study:</b> Python, ML, Deep Learning</p>";
            output += "<p><b>🎓 Course:</b> AI For Everyone</p>";
            output += "<p><b>📺 YouTube:</b> Krish Naik, CampusX</p>";
            output += "<p><b>🛠 Project:</b> AI Chatbot, Face Recognition</p>";
            output += "<p><b>💰 Salary:</b> ₹8–20 LPA</p>";
            output += "</div>";
        }

        else if (value === "Web Development") {

            output += "<div class='card'>";
            output += "<h3>🌐 Web Development</h3>";
            output += "<p><b>🎯 Career:</b> Frontend / Full Stack Developer</p>";
            output += "<p><b>📚 Study:</b> HTML, CSS, JavaScript, React, Node.js</p>";
            output += "<p><b>🎓 Course:</b> Full Stack Web Development</p>";
            output += "<p><b>📺 YouTube:</b> SuperSimpleDev, Traversy Media</p>";
            output += "<p><b>🛠 Project:</b> Portfolio Website, E-commerce Website</p>";
            output += "<p><b>💰 Salary:</b> ₹6–15 LPA</p>";
            output += "</div>";
        }

        else if (value === "Machine Learning") {

            output += "<div class='card'>";
            output += "<h3>📊 Machine Learning</h3>";
            output += "<p><b>🎯 Career:</b> ML Engineer</p>";
            output += "<p><b>📚 Study:</b> Python, Statistics, TensorFlow</p>";
            output += "<p><b>🎓 Course:</b> Machine Learning Specialization</p>";
            output += "<p><b>📺 YouTube:</b> Krish Naik, CampusX</p>";
            output += "<p><b>🛠 Project:</b> House Price Prediction</p>";
            output += "<p><b>💰 Salary:</b> ₹8–18 LPA</p>";
            output += "</div>";
        }

        else if (value === "Data Science") {

            output += "<div class='card'>";
            output += "<h3>📈 Data Science</h3>";
            output += "<p><b>🎯 Career:</b> Data Scientist</p>";
            output += "<p><b>📚 Study:</b> Python, SQL, Power BI, Pandas</p>";
            output += "<p><b>🎓 Course:</b> IBM Data Science Professional Certificate</p>";
            output += "<p><b>📺 YouTube:</b> Alex The Analyst, Krish Naik</p>";
            output += "<p><b>🛠 Project:</b> Sales Dashboard</p>";
            output += "<p><b>💰 Salary:</b> ₹7–18 LPA</p>";
            output += "</div>";
        }

    }

    result.innerHTML = output;
}