const endpoint= "https://www.boredapi.com/api/activity/";

const activityButton = document.querySelector('#js-new-activity');
activityButton.addEventListener('click',getActivity);

async function getActivity() {
  console.log("activity button was clicked");
  try {
    const response = await fetch(endpoint)
    if (!response.ok){
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayActivity(json.activity);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayActivity(activity) {
  const activityText= document.querySelector('#js-activity-text');
  activityText.textContent = activity;
}
