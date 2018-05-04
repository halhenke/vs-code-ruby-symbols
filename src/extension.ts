
import { ExtensionContext, languages} from 'vscode';
import HaskellDocumentSymbolProvider from './haskell_document_symbol_provider'

export function activate(context: ExtensionContext) {
  console.log("Haskell symbols active v 0.1.4")
  var selector = {
    language: 'haskell',
    scheme: 'file'
  };
  context.subscriptions.push(languages.registerDocumentSymbolProvider( selector, new HaskellDocumentSymbolProvider));
}

export function deactivate() {}