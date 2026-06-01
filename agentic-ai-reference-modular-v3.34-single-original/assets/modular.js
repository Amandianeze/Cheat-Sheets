
(function(){
 var f=document.querySelector('footer');
 if(f) f.setAttribute('data-print-date',
  new Date().toLocaleDateString('en-GB',{year:'numeric',month:'short',day:'numeric'}));
})();

(function () {
 const toc = document.querySelector('.toc');
 if (!toc) return;
 const groups = () => Array.from(toc.querySelectorAll('details'));
 toc.querySelectorAll('[data-toc-action]').forEach((button) => {
  button.addEventListener('click', () => {
   const shouldOpen = button.getAttribute('data-toc-action') === 'expand';
   groups().forEach((group) => { group.open = shouldOpen; });
  });
 });
})();

(function () {
 const details = Array.from(document.querySelectorAll('.toc details'));
 const sync = (node) => {
  const summary = node.querySelector(':scope > summary');
  if (summary) summary.setAttribute('aria-expanded', node.open ? 'true' : 'false');
 };
 details.forEach((node) => {
  sync(node);
  node.addEventListener('toggle', () => sync(node));
 });
})();

