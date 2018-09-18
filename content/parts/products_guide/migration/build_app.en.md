Now that you can use Monaca CLI commands with your Vue project, let's start building it with Monaca CLI. For simplicity, we only show how to create a debug build for Android in this guide. 

### Using CLI Command Only
1. Navigate to the Vue project directory.
{{<highlight bash>}}
$ cd <project dir>
{{</highlight>}}

2. Start Android Debug Build  
{{<highlight bash>}}
$ monaca remote build android --build-type=debug
{{</highlight>}}

### Using CLI Command with GUI
1. Navigate to the Vue project directory.
{{<highlight bash>}}
$ cd <project dir>
{{</highlight>}}

2. Open the Build Window to start building.
{{<highlight bash>}}
$ monaca remote build --browser
{{</highlight>}}

3. The Debug build is selected by default. So, just click on {{<guilabel name="Start Build">}}. 
	{{<img src="/images/migration/cli_build.png">}}

4. It may take several minutes for the build to complete. Please wait. The following screen will appear after the build is successfully completed. You can then choose various ways to install the build app into your device. 
  {{<img src="/images/migration/localkit_build_success.png">}}