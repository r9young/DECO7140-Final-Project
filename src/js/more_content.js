
// The JavaScript function `toggleContent()` is designed to control the visibility of a particular HTML content section and update a button's label accordingly. Here's a breakdown of what the code does:

// 1. **Getting Elements**:
//    - `var moreContent = document.getElementById("more-content");`: This line finds an HTML element with the ID `more-content` and stores it in the variable `moreContent`.
//    - `var btnText = document.querySelector(".read-more-btn");`: This line retrieves the first HTML element with the class name `read-more-btn` and stores it in the variable `btnText`.

// 2. **Toggle Logic**:
//    - `if (moreContent.style.display === "none")`: Checks if the `moreContent` element is currently hidden (`style.display` is set to "none").
//      - If `true`:
//        - `moreContent.style.display = "block";`: Changes the display style of the `moreContent` element to "block," making it visible.
//        - `btnText.innerText = "Read Less";`: Updates the button's text to "Read Less."

//    - `else`: If the `moreContent` element is already visible (display style isn't "none"):
//      - `moreContent.style.display = "none";`: Hides the `moreContent` section by setting its display style to "none."
//      - `btnText.innerText = "Read More";`: Updates the button's text to "Read More."

// 3. **Overall Functionality**:
//    - When the function `toggleContent` is triggered (likely by clicking the button), it alternates the visibility of the `moreContent` section and toggles the button's text between "Read More" and "Read Less."

// Make sure that the elements with IDs and classes specified in the code exist in your HTML file for this function to work properly.



/*{ <div class="story-text">
    <div>
        <p>In the quiet town of Brisbane, where children usually stayed indoors, glued to their screens, a surprising challenge was brewing. It all started with Mrs. Sue, a retired schoolteacher who noticed that her grandchildren were spending more and more time isolated, playing video games.</p>
    </div>
        
    <div id="more-content">
        <p>One sunny afternoon, she invited her grandchildren, along with their friends, to try out an old game from her childhood—hopscotch. Initially skeptical, the kids were soon intrigued by the colorful chalk designs she drew on the sidewalk. Mrs. Lee explained the rules, and before long, they were eagerly tossing stones and hopping on one foot.</p>
        <p>The physical nature of hopscotch, combined with the laughter and camaraderie it brought, was a stark contrast to the solitary hours spent in front of screens. The children began to enjoy the fresh air and the joy of playing together. As they played, Mrs. Lee subtly incorporated challenges that required teamwork and strategic thinking, skills they usually exercised in video games but now found in a real-world setting.</p>
        <p>Word of this fun, engaging game spread through the neighborhood. Soon, parents were encouraging their children to join Mrs. Lee's hopscotch games instead of spending afternoons indoors. Every weekend, the sidewalks of Greenwood blossomed with colorful hopscotch grids, each more intricate than the last.</p>
    </div>
    <span class="read-more-btn" onclick="toggleContent()">Read More</span>   
</div> }*/


function toggleContent() {
    var moreContent = document.getElementById("more-content");
    var btnText = document.querySelector(".read-more-btn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btnText.innerText = "Read Less";
    } else { 
    // If the `moreContent` element is already visible (display style isn't "none")
        moreContent.style.display = "none";
        btnText.innerText = "Read More";
    }
}



