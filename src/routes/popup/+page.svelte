<script>
	async function getPageVar(name, tabId) {
		const [{ result }] = await chrome.scripting.executeScript({
			func: (name) => window[name],
			args: [name],
			target: {
				tabId: tabId ?? (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id
			},
			world: 'MAIN'
		});
		return result;
	}
	// TODO: Make this happen in the moment that user changes URL
	getPageVar('LIVE').then((liveObject) => {
		if (!liveObject) {
			console.log('Setting disabled icon');
			chrome.action.setIcon({ path: { 38: 'disabled_icon.png' } });
		} else {
			document.querySelector('#site').value = JSON.stringify(liveObject['site'], null, 2);
			document.querySelector('#page').value = JSON.stringify(liveObject['page'], null, 2);
			document.querySelector('#flags').value = JSON.stringify(liveObject['flags'], null, 2);

			chrome.action.setIcon({ path: { 38: 'favicon.png' } });
		}

		console.log('Site has live');
	});
</script>

<svelte:head>
	<title>Deco Devtools</title>
</svelte:head>

<div style="padding: 20px;">
	<h1>Deco DevTools</h1>
	<p style="margin: 10px 0;">Current Site:</p>
	<textarea id="site" style="width: 100%; height: 100px;" />
	<p style="margin: 10px 0;">Current Page:</p>
	<textarea id="page" style="width: 100%;  height: 150px;" />

	<p style="margin: 10px 0;">Current Flags:</p>
	<textarea id="flags" style="width: 100%;  height: 150px;" />
</div>
