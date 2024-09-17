/** 
 * This is a test file
 * @class TestApp
 * @version 1.0.0
 * @author Beatriz Sanssi <bs222eh@student.lnu.se>
*/

import { Task } from '../Task';
import { NotificationSystem } from '../NotificationSystem';
import { User } from '../User';
import { Category } from '../Category';

const notificationSystem = new NotificationSystem;
const user = new User('Beatriz Sanssi', 'bs222eh@student.lnu.se');
const category = new Category('Math');
