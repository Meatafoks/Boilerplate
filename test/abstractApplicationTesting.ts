import { MetafoksApplication, startMetafoksTesting } from 'metafoks-application'
import { App } from '../src'

/**
 * Функция настройки абстрактного тестирования приложения Metafoks Application
 *
 * https://github.com/Meatafoks/metafoks-application/docs/testing.md
 */
export function abstractApplicationTesting() {
  beforeAll(async () => {
    await startMetafoksTesting(App, {
      overrides: {
        // тут можно что-то переопределить
      },
      logger: {
        fileWritingEnabled: false,
      },
    })
  })

  afterAll(async () => {
    // Очистка после тестов
    await MetafoksApplication.stopApplication()
  })
}
