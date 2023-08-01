import { BinaryAdd } from 'test-hybrid-package/BinaryAdd';

export class CommonService {
	constructor() {
		const binaryAdd = new BinaryAdd();
		const sum = binaryAdd.add(2,3);
	
		console.log(sum);
	}
}
