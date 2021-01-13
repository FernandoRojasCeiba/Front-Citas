import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect<any>(page.getText('app-root #title')).toEqual('Aplicación de Prueba - citas');
  });

  it('should display welcome message', () => {
    page.navigateTo('/consultar');
    expect<any>(page.getText('app-root #listadoTitle')).toEqual('Listado de Citas');
  });

  it('should display welcome message', () => {
    page.navigateTo('/agendar');
    expect<any>(page.getText('app-root #agendarTitle')).toEqual('Agendar Cita');
  });

  it('should display welcome message', () => {
    page.navigateTo('/editar');
    expect<any>(page.getText('app-root #editarTitle')).toEqual('Cambiar Fecha Cita');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
