import {
  Factory,
  Model
} from 'miragejs'

import { faker } from '@faker-js/faker'

export const userModel = {
  user: Model
}

export const userFactory = {
  user: Factory.extend({
    name() {
      return faker.name.middleName()
    },
    email() {
      return faker.internet.email()
    },
    login() {
      return faker.name.firstName()
    },
    password() {
      return faker.internet.password()
    },
    avatar() {
      return faker.image.imageUrl(128, 128, 'people')
    },
    auth() {
      return false
    }
  })
}
