module.exports = function functionCodeGenerator(el, codegen) {
    if (el.parentNode.type !== 'TemplateRoot') {
        codegen.addError('server-static is a static tag and can only be declared at the template root');
    }

    var code = el.tagString.replace(/^server-static\s*/, '').trim();

    if (code[0] === '{') {
        var statements = code.slice(1, -1);
        codegen.addServerStaticCode(codegen.builder.code(statements));
    } else {
        codegen.addServerStaticCode(codegen.builder.expression(code));
    }

    return null;
};
