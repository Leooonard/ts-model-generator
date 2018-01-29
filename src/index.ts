import Ast, {
    SourceFile
} from 'ts-simple-ast';
import * as Path from 'path';
import * as fs from 'fs';

const ast = new Ast();
const fileName = process.argv[2];
const sourceFilePath = Path.join(fileName);
console.log(sourceFilePath);
const sourceFile = ast.addExistingSourceFile(sourceFilePath);
const interfaces = sourceFile.getInterfaces();

interfaces.forEach(interfaceItem => {
    if (interfaceItem.getName()[0] !== 'I') {
        interfaceItem.rename('I' + interfaceItem.getName());
    }

    interfaceItem.getProperties().forEach(property => {
        property.rename(property.getName()[0].toLowerCase() + property.getName().slice(1));
    });
});

(sourceFile as SourceFile).saveSync();

console.log('转换契约文件成功');
process.exit(0);