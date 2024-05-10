#!/bin/bash

# Сохраняем введенное название
component_name_or_path=$1

# Забираем название из пути
component_name=$(basename "$component_name_or_path")

# Условие для заполненного имени
if [ -z "$component_name" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Дериктории компонента
component_dir="src/components/$component_name_or_path"
mkdir -p $component_dir

# Шаблонные файлы в дериктории

touch "$component_dir/$component_name.tsx"
touch "$component_dir/$component_name.module.scss"
touch "$component_dir/index.ts"

# Шаблонный код в файлах
index_ts_template="export { default as $component_name } from './$component_name'"
component_tsx_template="import styles from './$component_name.module.scss'

interface ${component_name}Props {}

const ${component_name} = ({}: ${component_name}Props): JSX.Element => {
  return (
    <div className={styles.block}>
      <p>${component_name} Component</p>
    </div>
  )
}
export default ${component_name}"

# Записываем по файлам
echo "$component_tsx_template" > "$component_dir/$component_name.tsx"
echo "$index_ts_template" > "$component_dir/index.ts"

echo "Component '$component_name' created in components."
