import { useFrameStore } from '../../store/frameStore';
import { templates } from '../../data/templates';
import { TemplateCard } from './TemplateCard';
import styles from './TemplateGallery.module.css';

export function TemplateGallery() {
  const activeId = useFrameStore((s) => s.activeTemplateId);
  const applyTemplate = useFrameStore((s) => s.applyTemplate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.galleryLabel}>Templates</div>
      <div className={styles.grid}>
        {templates.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            template={tpl}
            active={activeId === tpl.id}
            onSelect={() => applyTemplate(tpl.id)}
          />
        ))}
      </div>
    </div>
  );
}
