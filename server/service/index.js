import Utility from '../lib/Utility';
import ManagerService1 from './ManagerService'
import DealBusinessService1 from './DealBusinessService';
import MySqlHelper1 from './MySqlService';
import RedisService1 from './RedisService';
import MSUserService1 from './MSUserService';
import DemoService1 from './DemoService';

const DemoService = new DemoService1();
const MSUserService = new MSUserService1();
const ManagerService = new ManagerService1();
const DealBusinessService = new DealBusinessService1();
const MySqlHelper = new MySqlHelper1();
const RedisService = new RedisService1();

export {
  MSUserService, DemoService,
  Utility, ManagerService, DealBusinessService, MySqlHelper, RedisService
}