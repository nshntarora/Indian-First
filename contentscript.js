var REPLACEMENTS = {
    'Hindu': 'Indian',
    'Muslim': 'Indian',
    'Sikh': 'Indian',
    'Christian': 'Indian',
    'Buddhist': 'Indian',
    'Jain': 'Indian',
    'hindu': 'indian',
    'muslim': 'indian',
    'sikh': 'indian',
    'christian': 'indian',
    'buddhist': 'indian',
    'jain': 'indian',
    'Hindus': 'Indians',
    'Muslims': 'Indians',
    'Sikhs': 'Indians',
    'Christians': 'Indians',
    'Buddhists': 'Indians',
    'Jains': 'Indians',
    'hindus': 'indians',
    'muslims': 'indians',
    'sikhs': 'indians',
    'christians': 'indians',
    'buddhists': 'indians',
    'jains': 'indians'
};

var replaceReligion = function(textNode) {
    var text = textNode.data;
    $.each(REPLACEMENTS, function (before, after) {
        text = text.replace(new RegExp(before, "g"), after);
    });
    textNode.data = text;
};

// Only alter text nodes
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
            [].slice.call(mutation.addedNodes).forEach(function(node) {
                if (node.nodeName.toLowerCase() == "#text") {
                    replaceReligion(node);
                }
            });
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree:   true
});
