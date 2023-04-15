import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  async deleteCar(car) {
    await car.destroyRecord();
  }
}
