serializer = command_options.shift
model = command_options.shift
id = command_options.shift

Model = model.constantize
Serializer = serializer.constantize

Serializer.new(Model.find(id)).serializable_hash.as_json