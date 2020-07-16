cpac --platform docker --image fcpindi/c-pac --tag longitudinal \
  run /media/ebs/data/IBATRT /media/ebs/runs/2020-07-15_feature-longitudinal_IBATRT participant \
  --pipeline_file /media/ebs/runscripts/2020-07-14_pipeline.yml \
  --data_config_file /media/ebs/runscripts/data_config_2020-07-15.yml \
  --save_working_dir
