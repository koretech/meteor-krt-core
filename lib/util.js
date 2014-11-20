KRT.Util = {};

KRT.Util.diffToMongo = function(left, right, filterKeys) {
	var filterFunc = (filterKeys) ? function(path,key){
		return _(filterKeys).find(key);
	} : undefined;

	var diffs = DeepDiff(left, right, filterFunc);
	if (diffs) return applyDiff(diffs);
	return null;
};

function applyDiff(d, mong) {
	mong = mong || {};
	_(d).each(function(c){
		switch (c.kind) {
			case 'A':
				mong.$set = mong.$set || {};
				mong.$set[pathToField(c.path)+ '.' + c.index] = c.item.rhs;
				break;
			case 'D':
				mong.$unset = mong.$unset || {};
				mong.$unset[pathToField(c.path)] = "";
				break;
			case 'E':
			case 'N':
				mong.$set = mong.$set || {};
				mong.$set[pathToField(c.path)] = c.rhs;
				break;
		}
	});
	return mong;
}

function pathToField(path) {
	return _(path).reduce(function(memo, value){
		if (memo == '') return value;
		return memo + '.' + value;
	},'');
}
