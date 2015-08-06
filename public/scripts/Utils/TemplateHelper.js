function TemplateHelper() {}

TemplateHelper.getTemplate = function(name) {
    return $.ajax({
        type: "GET",
        async: false,
        url : "templates/" + name,
        dataType: 'text',
        error: function() {
            throw new Error("Could not load " + name);
        }
    }).responseText;
};