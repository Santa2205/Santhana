exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) 
  {
	for (var i = 0, len = arr.length; i < len; i++) 
	{
      if (arr[i] === item) 
	  {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) 
  {
	var value = 0;
	for(var i = 0, len = arr.length; i < len; i++)
	{
		value = value + arr[i];
	}
	return value;
  },

  remove: function(arr, item) 
  {
	var i;
	var len; 
    for (i = 0, len = arr.length; i < len; i++) 
	{
      if(arr[i] === item)
	  {
		arr.splice(i,1);
		i--;
		len--;
	  }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) 
  {
	var i;
	var len; 
    for (i = 0, len = arr.length; i < len; i++) 
	{
      if(arr[i] === item)
	  {
		arr.splice(i,1);
		i--;
		len--;
	  }
    }
    return arr;
  },

  append: function(arr, item) 
  {
	arr.push(item);
	return arr;
  },

  truncate: function(arr) 
  {
	arr.pop();
	return arr;
  },

  prepend: function(arr, item) 
  {
	arr.unshift(item);
	return arr;
  },

  curtail: function(arr) 
  {
	arr.shift(arr);
	return arr;
  },

  concat: function(arr1, arr2) 
  {
	return arr1.concat(arr2);
  },

  insert: function(arr, item, index) 
  {
	arr.splice(index, 0, item);
	return arr;
  },

  count: function(arr, item) 
  {
	var count = 0;
    for (var i = 0, len = arr.length; i < len; i++) 
	{
      if (arr[i] === item) 
	  {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) 
  {
	var sorted_arr = arr.slice().sort();
	var results = [];
	for (var i = 0; i < arr.length - 1; i++) 
	{
		if ((sorted_arr[i + 1] == sorted_arr[i]) 
			&& (results.indexOf(sorted_arr[i]) === -1)) 
		{
			results.push(sorted_arr[i]);
		}
	}
	return results;
  },

  square: function(arr) 
  {
	var value = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      value.push(arr[i] * arr[i]);
    }
    return value;
  },

  findAllOccurrences: function(arr, target) 
  {
	var value = [];
    for (var i = 0, len = arr.length; i < len; i++) 
	{
      if (arr[i] === target) 
	  {
        value.push(i);
      }
    }
    return value;
  }
};
