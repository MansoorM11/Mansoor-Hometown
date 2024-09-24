var Must_visit_website, Must_visit_website_url;


Must_visit_website = ['Pakistan Tourism Development Corporation', 'Visit Lahore (Lahore’s Tourism Official Website)', 'TripAdvisor - Lahore', 'Lahore Tourism App '];
Must_visit_website_url = ['https://www.tourism.gov.pk/', 'https://visitlahore.com/', 'https://www.tripadvisor.co.uk/Tourism-g295413-Lahore_Punjab_Province-Vacations.html', 'https://tdap.gov.pk/pakistan-tourism-applications-android-ios/'];
while (Must_visit_website != !!Must_visit_website.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", Must_visit_website_url.shift());
  new_a.innerText = Must_visit_website.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
