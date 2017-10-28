module.exports = function functionCodeGenerator(el, codegen) {
    if (el.parentNode.type !== 'TemplateRoot') {
        codegen.addError('server is a static tag and can only be declared at the template root');
    }

    var code = el.tagString.replace(/^server\s*/, '').trim();

    if (code[0] === '{') {
        var statements = code.slice(1, -1);
        codegen.addServerCode(codegen.builder.code(statements));
    } else {
        codegen.addServerCode(codegen.builder.expression(code));
    }

    return null;
};
