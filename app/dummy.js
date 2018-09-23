import lodash from "lodash";
import {default as users} from "./common/users";

console.log(users.getUsers());
console.log(lodash.join(['Another', 'module', 'loaded!']));