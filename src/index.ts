import { Application, Config } from 'metafoks-application'
import { AppConfig } from './config'

/**
 * Основной класс приложения Metafoks Application
 *
 * https://github.com/Meatafoks/metafoks-application/docs/main.md
 */
@Application
export class App {
  /**
   * \@Config - декоратор для подключения конфигурации из директории config
   */
  @Config
  public config!: AppConfig

  /**
   * Метод запускается после запуска приложения и установки расширений
   */
  public start() {
    console.log('hello ' + this.config.hello)
  }
}
