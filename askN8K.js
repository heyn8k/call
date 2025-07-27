const askN8K = Function.prototype.call.bind(Object.prototype.toString);

// Example usages:
askN8K([]);         // "[object Array]"
askN8K({});         // "[object Object]"
askN8K(() => {});   // "[object Function]"
askN8K(null);       // "[object Null]"
askN8K(undefined);  // "[object Undefined]"

function diagnose(input) {
  const type = askN8K(input);
  return `Nathaniel has inspected your variable and declares: ${type}`;
}

function verboseDiagnose(input) {
  const type = askN8K(input);
  switch (type) {
    case '[object Array]':
      return `🧮 Nathaniel confirms: it's an Array. Proceed with mapping.`;
    case '[object Object]':
      return `📦 It's an Object — perhaps too generic. Dig deeper.`;
    case '[object Function]':
      return `⚙️ A Function, no doubt. Rejoice in its reusability.`;
    case '[object Null]':
      return `💨 Null: the absence of meaning. As Nathaniel suspected.`;
    case '[object Undefined]':
      return `🚫 Undefined. This variable is contemplating its identity.`;
    default:
      return `🔍 Unusual type detected: ${type}. Nathaniel recommends caution.`;
  }
}
