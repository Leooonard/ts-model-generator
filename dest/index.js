"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_simple_ast_1 = require("ts-simple-ast");
var Path = require("path");
var ast = new ts_simple_ast_1.default();
var fileName = process.argv[2];
var sourceFilePath = Path.join(fileName);
console.log(sourceFilePath);
var sourceFile = ast.addExistingSourceFile(sourceFilePath);
var interfaces = sourceFile.getInterfaces();
interfaces.forEach(function (interfaceItem) {
    if (interfaceItem.getName()[0] !== 'I') {
        interfaceItem.rename('I' + interfaceItem.getName());
    }
    interfaceItem.getProperties().forEach(function (property) {
        property.rename(property.getName()[0].toLowerCase() + property.getName().slice(1));
    });
});
sourceFile.saveSync();
console.log('转换契约文件成功');
process.exit(0);
