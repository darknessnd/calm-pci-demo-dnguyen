// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// thirdpartyscript.js

// Mock third-party script that dynamically injects a fourth-party script

(function () {

    console.log("[ThirdParty] Script initialized");

    // Prevent duplicate injection

    if (document.getElementById("fourth-party-script")) {

        console.log("[ThirdParty] Fourth-party script already loaded");

        return;

    }

    // Create the new <script> element

    const fourthPartyScript = document.createElement("script");

    // Configure attributes

    fourthPartyScript.id = "fourth-party-script";

    fourthPartyScript.src = "https://transcend-cdn.com/cm/d556c3a1-e57c-4bdf-a490-390a1aebf6dd/ui.js";

    fourthPartyScript.async = true;

    // Optional event handlers

    fourthPartyScript.onload = function () {

        console.log("[ThirdParty] Fourth-party script loaded successfully");

    };

    fourthPartyScript.onerror = function () {

        console.error("[ThirdParty] Failed to load fourth-party script");

    };

    // Append to DOM

    document.head.appendChild(fourthPartyScript);

    console.log("[ThirdParty] Injected fourth-party script into DOM");

})();

