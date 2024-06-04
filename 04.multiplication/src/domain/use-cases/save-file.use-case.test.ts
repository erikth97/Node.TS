import fs from 'fs';
import { SaveFile } from './save-file.use-case';



describe('SaveFileUseCase', () => {  

  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name',
  }

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;


  afterEach(() => {
    const outputFolderExsist = fs.existsSync('outputs');
    if (outputFolderExsist) fs.rmSync('outputs', {recursive: true});

    const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
    if ( customOutputFolderExists ) fs.rmSync(customOptions.fileDestination, { recursive: true });

  })

  test('Should save file with default values', () => {

    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content'
    }

    const result = saveFile.execute(options);
    const fileExsist = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});
  
    expect(result).toBe(true);
    expect(fileExsist).toBe(true);
    expect(fileContent).toBe(options.fileContent)


  });


})